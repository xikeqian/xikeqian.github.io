var VSHADER_SOURCE = `
    attribute vec4 a_Position;\n
    uniform mat4 u_ModelMatrix;\n   //mat4代表4 * 4的矩阵
    void main() {\n
        gl_Position = u_ModelMatrix * a_Position;\n
    }\n
`

var PSHADER_SOURCE = `
    void main() { \n
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n
    }\n
`

//旋转速度 度/秒
var ANGLE_STEP = 45.0

function main() {
    var canvas = document.getElementById('webgl')
    var gl = getWebGLContext(canvas)
    if (!gl) {
        return console.log('fail to get gl')
    }
    if (!initShaders(gl, VSHADER_SOURCE, PSHADER_SOURCE)) {
        return console.log('init webgl fail')
    }
    var n = initVertexBuffers(gl)


    gl.clearColor(0.0, 0.0, 0.0, 1.0)

    var u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix')
    if (!u_ModelMatrix) {
        console.log('Failed to get the storage location of u_ModelMatrix');
        return;
    }

    var currentAngle = 0.0
    var modelMatrix = new Matrix4()
    var tick = function () {
        currentAngle = animate(currentAngle)    //更新选择角度
        draw(gl, n, currentAngle, modelMatrix, u_ModelMatrix)
        requestAnimationFrame(tick, canvas)     //请求浏览器调用tick函数
    }
    tick()

}
function initVertexBuffers(gl) {
    var vertices = new Float32Array([0.0, 0.5, -0.5, -0.5, 0.5, -0.5])

    var buffer = gl.createBuffer();
    var n = 3

    if (!buffer) {
        console.log('fail to create the buffer object');
        return -1;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)

    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');

    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_Position);
    return n
}

function draw(gl, n, currentAngle, modelMatrix, u_ModelMatrix) {
    //设置旋转矩阵
    modelMatrix.setRotate(currentAngle, 0, 0, 1); 
   
    //将旋转矩阵传给顶点着色器
    gl.uniformMatrix4fv(u_ModelMatrix, false, modelMatrix.elements);
  
    // 清空颜色缓冲区
    gl.clear(gl.COLOR_BUFFER_BIT);
  
    gl.drawArrays(gl.TRIANGLES, 0, n);
  }

//记录上一次调用函数的时刻
var g_last = Date.now()

function animate(angle) {
    // 计算记录上次动画过了多长时间
    var now = Date.now();
    var elapsed = now - g_last;
    g_last = now;
    // 根据时间更新角度
    var newAngle = angle + (ANGLE_STEP * elapsed) / 1000.0;
    return newAngle %= 360;
}  