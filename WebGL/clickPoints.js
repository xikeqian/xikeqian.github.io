/**
 * 定点着色器：定点着色器是用来描述顶点特性（如位置，颜色等）的程序，顶点是指二维或三维空间中的一个点，比如二维或三维
 * 图形的端点或交点
 * // attirbute：存储限定符，表示接下来的变量是一个attirbute变量，attirbute变量必须声明为一个全局变量。格式<存储限定符><类型><变量名>
 *  gl_PointSize = 10.0;        //设置尺寸,该语句只在绘制单个点的时候才有效
 * gl_Position = a_Position;       //设置坐标
*/
/**
 * javascript向WebGL程序传值有两种方式: attribute和uniform变量，attribute变量传递的是那些和顶点相关的数据，而uniform传递的是那些对于所有顶点都相同的数据。
*/
var VSHADER_SOURCE = `
    attribute vec4 a_Position;\n
    void main() {\n
        gl_Position = a_Position;\n
        // 设置尺寸
        gl_PointSize = 10.0;\n
    }\n
`
/**
 * 片元着色器：进行逐片元处理过程（如光照）的程序。片元是WebGl的一个术语，可以理解为像素（图像的单元）
 * gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);   //设置颜色
*/
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

    // 获取a_Position变量在webgl中的存储位置
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');

    var u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');

    if (a_Position === -1) {
        console.log('fail to get a_Position varibale');
        return;
    }

    if (u_FragColor == null) {
        console.log('fail to get u_FragColor varibale');
        return;
    }

    canvas.onmousedown = function (evnet) { // 注册点击事件
        click(event, gl, canvas, a_Position, u_FragColor);
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    gl.clear(gl.COLOR_BUFFER_BIT);  //清空颜色缓冲区，即清除canvas背景色，默认WebGL会置为(0.0, 0.0, 0.0, 0.0)
}
// 需要用数组保存过往的点击位置，因为绘制操作实际是在颜色缓冲区中进行的，绘制结束后系统将缓冲区中的内容显示在屏幕上，然后颜色缓冲区就会被重置，内容会丢失
var g_points = [];

var g_colors = [];  //存储点颜色的数组

function click(event, gl, canvas, a_Position, u_FragColor) {
    var x = event.clientX;
    var y = event.clientY;

    var rect = event.target.getBoundingClientRect();

    x = ((x - rect.left) - canvas.height / 2) / (canvas.height / 2)
    y = ((canvas.width / 2) - (y - rect.top)) / (canvas.width / 2)

    g_points.push([x, y]);

    //将点的颜色存储到g_colors数组中
    if (x >= 0.0 && y >= 0.0) {     //第一象限
        g_colors.push([1.0, 0.0, 0.0, 1.0]); //红色
    } else if (x < 0.0 && y < 0.0) { // 第三象限
        g_colors.push([0.0, 1.0, 0.0, 1.0]); //绿色
    } else {
        g_colors.push([1.0, 1.0, 1.0, 1.0]); //白色
    }

    // Clear <canvas>
    gl.clear(gl.COLOR_BUFFER_BIT);

    for (var i = 0; i < g_points.length; i++) {
        //将点的位置传递到变量a_Position
        gl.vertexAttrib3f(a_Position, g_points[i][0], g_points[i][1], 0.0);

        var rgba = g_colors[i]

        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

        //绘制点, 其中第三个代表绘制点的个数.
        gl.drawArrays(gl.POINTS, 0, 1);
    }
}