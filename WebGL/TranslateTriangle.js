
var VSHADER_SOURCE = `
attribute vec4 a_Position;\n
uniform vec4 u_Translation;\n
void main() {\n
    gl_Position = a_Position + u_Translation;\n
}\n
`

var PSHADER_SOURCE = `
    void main() { \n
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n
    }\n
`

var Tx = 0.5, Ty = 0.5, Tz = 0.0;
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

    // 将平移距离传输给定点着色器
    var u_Translation = gl.getUniformLocation(gl.program, 'u_Translation');
    gl.uniform4f(u_Translation, Tx, Ty, Tz, 0.0);

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
/**
 * 齐次坐标矢量： x , y , z , w
 * 如果齐次坐标最后一个分量为1.0，那么前三个分量就表示一个点的三维坐标，平移后坐标的w分量必须是1.0，a_Position变量的w值是1.0，所以u_Translation
 * 的w分量必须是0.0
 */