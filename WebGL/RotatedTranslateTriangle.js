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



function main() {
    var canvas = document.getElementById('webgl')
    var gl = getWebGLContext(canvas)

    if (!gl) {
        return console.log('fail to get webgl')
    }

    if (!initShaders(gl, VSHADER_SOURCE, PSHADER_SOURCE)) {
        return console.log('init webgl fail')
    }

    var n = initVertexBuffers(gl)

    var ANGLE = 60.0 //旋转角度
    var Tx = 0.0 //平移距离

    var modelMatrix = new Matrix4()
    modelMatrix.setRotate(ANGLE, 0, 0, 1)   //设置模型矩阵为旋转矩阵
    modelMatrix.translate(Tx, 0, 0) //将模型矩阵乘以平移矩阵

    //先平移，在旋转
    // modelMatrix.setTranslate(Tx, 0, 0)
    // modelMatrix.rotate(ANGLE, 0, 0, 1)

    var u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix')
    gl.uniformMatrix4fv(u_ModelMatrix, false, modelMatrix.elements)

    gl.clearColor(0.0, 0.0, 0.0, 1.0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.drawArrays(gl.TRIANGLES, 0, n);
}

function initVertexBuffers(gl) {

    var vertices = new Float32Array([0.0, 0.3, -0.3, 0.3, 0.3, -0.3])

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
    return n;
}