
var VSHADER_SOURCE = `
attribute vec4 a_Position;\n
void main() {\n
    gl_Position = a_Position;\n
    // 设置尺寸
    gl_PointSize = 10.0;\n
}\n
`

var PSHADER_SOURCE = `
    //使用精度限定词来指定变量的范围（最大值和最小值）和精度，此处为中等精度
    precision mediump float;\n
    uniform vec4 u_FragColor;\n
    void main() { \n
        gl_FragColor = u_FragColor;\n
    }\n
`

function main() {
    var canvas = document.getElementById('webgl');

    var gl = getWebGLContext(canvas);

    if (!gl) {
        console.log('Failed to get the rendering context for WebGL');
        return;
    }

    if (!initShaders(gl, VSHADER_SOURCE, PSHADER_SOURCE)) {     //初始化着色器
        console.log('init webgl fail')
    }

    // 设置顶点位置
    var n = initVertexBuffers(gl);
    if (n < 0) {
        console.log('fail to set the position of vertices');
        return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    gl.clear(gl.COLOR_BUFFER_BIT);  //清空颜色缓冲区，即清除canvas背景色，默认WebGL会置为(0.0, 0.0, 0.0, 0.0)

    // webgl系统并不知道缓冲区有多少个顶点的数据（即使知道也不确定是否要全部画出）,我们应显示的告诉它要绘制多少个顶点
    /**
     * gl.drawArrays(mode, first, count)
     * mode: 指定的绘制方式，gl.POINTS, gl.LINES, gl.LINE_STRIP, gl.LINE_LOOP, gl.TRIANGLES, gl.TRIANGLES_STRIP, gl.TRIANGLE_FAN
     * first: 指定从哪个顶点开始绘制（整数型）
     * count: 指定绘制需要用到多少个顶点（整数型）
     * 每次执行执行顶点着色器，a_Position的z和w分量值都会自动被设为0.0或1.0，因为a_Position需要4个分量（vec4）而我们只提供了两个
     */
    gl.drawArrays(gl.POINTS, 0, n);
    // gl.drawArrays(gl.POINTs, 1, 1);
}


/**
 * 使用缓冲区对象向顶点着色器传入多个顶点数据，需要遵循以下5个步骤
 * 1.创建缓冲区对象(gl.createBuffer)
 * 2.绑定缓冲区对象(gl.bindBuffer)
 * 3.将数据写入缓冲区(gl.bufferData)
 * 4.将缓冲区对象分配给一个attribute变量(gl.vertexAttribPointer)
 * 5.开启attribute变量(gl.enableVertexAttribArray)
 */
/**
 * 类型化数组：为了绘制三维图形，WebGl需要同时处理大量相同类型的数据，如顶点坐标和颜色数据。为了优化性能，WebGL为每种基本数据类型
 * 引入了一种特殊的数组（类型化数组）。浏览器事先知道数组中的数据类型，所以处理起来更有效率。
 * 数组类型             每个元素所占字节数              描述（C语言中的数据类型）
 * Int8Array            1                           8位整数型（singed char）
 * UInt8Array           1                           8位无符号整数型（unsigned char）
 * Int16Array           2                           16位整数型（singed short)
 * UInt16Array          2                           16位无符号整数型（unsigned short）
 * Int32Array           4                           32位整数型（singed int）
 * UInt32Array          4                           32位无符号整数型（unsigned int）
 * Float32Array         4                           单精度32位浮点数（float）
 * Float64Array         8                           双精度64位浮点数（double）
 * 与普通Array数组不同，类型化数组不支持push()和pop()方法
 * 方法：
 * get(index)           获取第index个元素值
 * set(index, value)    设置第index个元素的值value
 * set(array, offset)   从第offset个元素开始将数组array中的值填充进去
 * length               数组的长度
 * BYTES_PER_ELEMENT    数组中每个元素所占的字节数
*/
function initVertexBuffers(gl) {
    // <第一个顶点的x坐标和y坐标><第二个顶点的x坐标和y坐标><第三个顶点的x坐标和y坐标>
    // Float32Array是一种类型化数组，
    var vertices = new Float32Array([0.0, 0.5, -0.5, -0.5, 0.5, -0.5]);
    var n = 3; //点的个数

    //创建缓冲区对象
    //缓冲区对象是webgl系统中的一块存储区，可以在缓冲区对象中保存想要绘制的顶点数据。
    var vertexBuffer = gl.createBuffer();
    
    if (!vertexBuffer) {
        console.log('fail to create the buffer object');
        return -1;
    }

    //将缓冲区对象绑定到目标, gl.bindBuffer(target, buffer),target可以是以下中的一个
    //gl.ARRAY_BUFFER表示缓冲区对象中包含了顶点的数据
    //gl.ELEMENT_ARRAY_BUFFER表示缓冲区中包含了顶点的索引值
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    //向缓冲区写入数据
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');

    //将缓冲区对象分配给a_Position
    //该方法可以将整个缓冲区（实际上是缓冲区对象的引用和指针）分配给attribute变量。
    /**
     * gl.vertexAttribPointer(location, size, type, normalized, stride, offset)
     * location: 指定待分配attrbute变量的存储位置
     * size: 指定缓冲区每个顶点的分量个数(1到4).若size比attribute变量需要分量数小，缺失的分量将按照与gl.vertexAttrib[1234]f()相同的规则不全，比如size为1，那么第二、三分量自动设置为0，第四分量为1
     * type: gl.UNSIGNED_BYTE, gl.SHORT, gl.UNSIGNED_SHORT, gl.INT,gl.UNSIGNED_INT,gl.FLOAT
     * normalize: boolean值，表明是否将非浮点数型的数据归化[0, 1]或[-1, 1]区间
     * stride: 指定相邻两个顶点间的字节数，默认为0
     * offset: 指定缓冲区对象中的偏移量（以字节为单位）
    */
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);


    //链接a_Position变量和分配给它的缓冲区对象
    //开启attribute变量，使缓冲区对attribute变量的分配生效
    //可以使用gl.disableVertexAttribArray()来关闭分配
    gl.enableVertexAttribArray(a_Position);

    return n;
}
/**
 * webgl可以绘制的基本图形
 * 基本图形             参数mode                描述
 * 点                   gl.POINTS               一系列点，绘制在v0, v1, v2...处
 * 线段                 gl.LINES                一系列单独的线段，绘制在(v0, v1)、(v2, v3)、(v4, v5)...处，如果点的个数是奇数，最后一个点会被忽略
 * 线条                 gl.LINE_STRIP           一系列连接的线段，被绘制在(v0, v1) (v1, v2) (v2, v3),第一个点是第一条线段的起点，第二个点是第一条线段的终点和第2条线段的起点，第i(i>1)个点第i-1条线段的终点和第i条线段的起点。以此类推，最后一个点是最后一条线段的终点
 * 回路                 gl.LINE_LOOP            一系列链接的线段，与gl.LINE_STRIP相比，增加了一条从最后一个点到第一个点的线段
 * 三角形               gl.TRIANGLES            一系列单独的三角形，绘制在(v0, v1, v2) (v3, v4, v5)...处，如果点的个数不是3的整数倍，则最后的会被忽略
 * 三角带               gl.TRIANGLE_STRIP       一系列条带状的三角形，前三个点构成了第1个三角形，从第二个点开始的3个点构成了第2个三角形（该三角形与前一个三角形共享一条边）。第二个三角形是(v2, v1, v3)而不是(v1, v2, v3)这是为了保持第二个三角形的绘制也按照逆时针的顺序。
 * 三角扇               gl.TRIANGLE_FAN         一系列三角形组成的类似于扇形的图形。前三个点构成第一个三角形，接下来的一个点和前一个三角形的最后一条边组成了接下来的一个三角形。这些三角形被绘制在(v0, v1, v2) (v0, v2, v3) (v0, v3, v4)...处
 * 
 * 
 * 
 * WebGL只能绘制三种图形：点、线段和三角形。但是从球体到立方体，再到游戏中的三维角色，都可以由小的三角形组成。  
 */