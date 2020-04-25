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


var ANGLE = 90.0;

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

    var n = initVertexBuffers(gl);

    
    var xformMatrix = new Matrix4()
    xformMatrix.setRotate(ANGLE, 0, 0, 1)

    var u_xformMatrix = gl.getUniformLocation(gl.program, 'u_xformMatrix')
    /**
     * uniformMatrix4fv(location, Transpose, array)
     * location: uniform变量存储位置
     * Transpose：在WebGL中必须指定为false
     * array: 待传输的类型化数组，4*4矩阵按列主序存储在其中
     */
    gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix.elements)


    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    gl.clear(gl.COLOR_BUFFER_BIT);

    
    gl.drawArrays(gl.TRIANGLES, 0, n);
}

function initVertexBuffers(gl) {
    
    var vertices = new Float32Array([0.0, 0.5, -0.5, -0.5, 0.5, -0.5]);
    var n = 3; 

    var vertexBuffer = gl.createBuffer();
    
    if (!vertexBuffer) {
        console.log('fail to create the buffer object');
        return -1;
    }


    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);


    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    

   
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);


    gl.enableVertexAttribArray(a_Position);

    return n;
}

