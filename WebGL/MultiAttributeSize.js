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
  var vertices = new Float32Array([0.0, 0.5, 0.5, -0.5, -0.5, -0.5])
  var n = 3
  var sizes = new Float32Array([10.0, 20.0, 30.0])
  var buffer = gl.createBuffer()
  var sizeBuffer = gl.createBuffer()
  if (!buffer || !sizeBuffer) {
    console.log('fail to create buffer')
    return -1
  }
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

  var a_Position = gl.getAttribLocation(gl.program, 'a_Position')
  var a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize')
  gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0)
  gl.enableVertexAttribArray(a_Position)

  //将顶点尺寸写入缓冲区对象
  gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, sizes, gl.STATIC_DRAW)
  gl.vertexAttribPointer(a_PointSize, 1, gl.FLOAT, false, 0, 0)
  gl.enableVertexAttribArray(a_PointSize)

  /**
   * webgl程序的缓冲区的分配是按照定义顺序来的，vertexAttribPointer写在前面的会分配到先创建的缓冲区，
   * 在此案例中，如果把 gl.vertexAttribPointer(a_PointSize, 1, gl.FLOAT, false, 0, 0)放到gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0)前面，
   * 则会导致顶点数据和点的尺寸数据不匹配，从而渲染失败
   */
  return n

}