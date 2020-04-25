var VSHADER_SOURCE = `
    attribute vec4 a_Position;\n
    uniform mat4 u_xformMatrix;\n   //mat4代表4 * 4的矩阵
    void main() {\n
        gl_Position = u_xformMatrix * a_Position;\n
    }\n
`

var PSHADER_SOURCE = `
    void main() { \n
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n
    }\n
`

function main() {
    var canvas = document.getElementById('webgl')
    var gl = getWebGLContext(canvas);
    if (!gl) {
        return console.log('fail to get gl')
    }
    if (!initShaders(gl, VSHADER_SOURCE, PSHADER_SOURCE)) {     //初始化着色器
        console.log('init webgl fail')
    }

    var Sx = 1.0, Sy = 1.5, Sz = 1.0

    var xformMatrix = new Float32Array([
        Sx, 0.0, 0.0, 0.0,
        0.0, Sy, 0.0, 0.0,
        0.0, 0.0, Sz, 0.0,
        0.0, 0.0, 0.0, 1.0
    ])

    var u_xformMatrix = gl.getUniformLocation(gl.program, 'u_xformMatrix')

    gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix)

    var n = initVertexBuffers(gl)

    gl.clearColor(0.0, 0.0, 0.0, 1.0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.drawArrays(gl.TRIANGLES, 0, n);
}

function initVertexBuffers(gl) {
    var vertices = new Float32Array([0.0, 0.5, -0.5, -0.5, 0.5, -0.5]);
    var n = 3
    var vertexBuffer = gl.createBuffer()

    if (!vertexBuffer) {
        console.log('fail to create the buffer object');
        return -1;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
   
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);


    gl.enableVertexAttribArray(a_Position);
    return n
}