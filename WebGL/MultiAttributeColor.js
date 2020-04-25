//varying变量，代表可变的变量

/**
 * 在WebGL中，如果顶点着色器和片元着色器中有同名和同类型的varying变量，那么顶点着色器赋给该变量额值会自动传入片元着色器
 */
/**
 * 在顶点着色器和片元着色器间，有着2个步骤
 * 1： 图形装配过程： 这一步的任务是将孤立的顶点坐标装配成几何图形，几何图形的类别有drawArrays的第一个参数决定，几何图形装配又称为图元装配，因为被装配出的基本图形又称为图元
 * 2: 光栅化过程： 将装配好的几何图形转化为片元，片元数目是几何图形在屏幕上所覆盖的像数
 */

var VSHADER_SOURCE = `
attribute vec4 a_Position;\n
attribute vec4 a_Color;\n
varying vec4 v_Color;\n
void main() {\n
    gl_Position = a_Position;\n
    // 设置尺寸
    gl_PointSize = 10.0;\n
    //将数据传给片元着色器，只需要在片元着色器中声明一个同名变量就行
    v_Color = a_Color;\n
}\n
`

var PSHADER_SOURCE = `
    //使用精度限定词来指定变量的范围（最大值和最小值）和精度，此处为中等精度 ,此处必须指定精度，不然初始initShaders失败
    precision mediump float;\n
    varying vec4 v_Color;\n
    void main() { \n
        //从顶点着色器接受片元数据
        gl_FragColor = v_Color;\n
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
    // gl.drawArrays(gl.TRIANGLES, 0, n)
    gl.drawArrays(gl.POINTS, 0, n)
}

function initVertexBuffers(gl) {
    //顶点坐标和颜色
    var verticesColors = new Float32Array([
        0.0, 0.5, 1.0, 0.0, 0.0,
        0.5, -0.5, 0.0, 1.0, 0.0,
        -0.5, -0.5, 0.0, 0.0, 1.0
    ])
    var n = 3
    var sizes = new Float32Array([10.0, 20.0, 30.0])
    var buffer = gl.createBuffer()
    if (!buffer) {
        console.log('fail to create buffer')
        return -1
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, verticesColors, gl.STATIC_DRAW)

    var a_Position = gl.getAttribLocation(gl.program, 'a_Position')
    var a_Color = gl.getAttribLocation(gl.program, 'a_Color')
    var FSIZE = verticesColors.BYTES_PER_ELEMENT
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, FSIZE * 5, 0)
    gl.enableVertexAttribArray(a_Position)

    gl.vertexAttribPointer(a_Color, 3, gl.FLOAT, false, FSIZE * 5, FSIZE * 2)
    gl.enableVertexAttribArray(a_Color)

    
    return n

}