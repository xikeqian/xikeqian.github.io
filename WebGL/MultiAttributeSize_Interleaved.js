var VSHADER_SOURCE = `
attribute vec4 a_Position;\n
attribute float a_PointSize;\n
void main() {\n
    gl_Position = a_Position;\n
    // 设置尺寸
    gl_PointSize = a_PointSize;\n
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
  var canvas = document.getElementById('webgl')
  var gl = getWebGLContext(canvas)

  if (!gl) {
    return console.log('fail to get gl')
  }
  if (!initShaders(gl, VSHADER_SOURCE, PSHADER_SOURCE)) {
    return console.log('fail to init webgl')
  }

  var n = initVertexBuffers(gl)

  gl.clearColor(0.0, 0.0, 0.0, 1.0)
  gl.clear(gl.COLOR_BUFFER_BIT)
  gl.drawArrays(gl.POINTS, 0, n)
}

function initVertexBuffers(gl) {
  var verticesSizes = new Float32Array([
    //顶点坐标和点的尺寸
    0.0, 0.5, 10.0, //第一个点
    -0.5, -0.5, 20.0, //第二个点
    0.5, -0.5, 30.0 //第三个点
  ])
  var n = 3
  var vertexSizeBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexSizeBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, verticesSizes, gl.STATIC_DRAW)
  var FSIZE = verticesSizes.BYTES_PER_ELEMENT
  // 获取a_Position的存储位置，分配缓冲区并开启
  var a_Position = gl.getAttribLocation(gl.program, 'a_Position')
  gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, FSIZE * 3, 0)
  gl.enableVertexAttribArray(a_Position)

  var a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize')
  gl.vertexAttribPointer(a_PointSize, 1, gl.FLOAT, false, FSIZE * 3, FSIZE * 2)
  gl.enableVertexAttribArray(a_PointSize)
  return n

}