/**
 * 在webgl中进行纹理映射，需要遵循以下四步：
 * 1、准备好映射到几何图像上的纹理图像
 * 2、为几何图形配置纹理映射方式
 * 3、加载纹理图像，并为其进行一些配置，以在webgl中使用
 * 4、在片元着色器中将相应的纹素从纹理中抽出来，并将纹素的颜色赋给片元
 * 纹素： 组成纹理图像的像素又称为纹素。
 */

// TexturedQuad.js (c) 2012 matsuda and kanda
// Vertex shader program
// var VSHADER_SOURCE =
//     'attribute vec4 a_Position;\n' +
//     'attribute vec2 a_TexCoord;\n' +
//     'varying vec2 v_TexCoord;\n' +
//     'void main() {\n' +
//     '  gl_Position = a_Position;\n' +
//     '  v_TexCoord = a_TexCoord;\n' +
//     '}\n';

// // Fragment shader program
// var FSHADER_SOURCE =
//     '#ifdef GL_ES\n' +
//     'precision mediump float;\n' +
//     '#endif\n' +
//     'uniform sampler2D u_Sampler;\n' +
//     'varying vec2 v_TexCoord;\n' +
//     'void main() {\n' +
//     '  gl_FragColor = texture2D(u_Sampler, v_TexCoord);\n' +
//     '}\n';

// function main() {
//     // Retrieve <canvas> element
//     var canvas = document.getElementById('webgl');

//     // Get the rendering context for WebGL
//     var gl = getWebGLContext(canvas);
//     if (!gl) {
//         console.log('Failed to get the rendering context for WebGL');
//         return;
//     }

//     // Initialize shaders
//     if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
//         console.log('Failed to intialize shaders.');
//         return;
//     }

//     // Set the vertex information
//     var n = initVertexBuffers(gl);
//     if (n < 0) {
//         console.log('Failed to set the vertex information');
//         return;
//     }

//     // Specify the color for clearing <canvas>
//     gl.clearColor(0.0, 0.0, 0.0, 1.0);

//     // Set texture
//     if (!initTextures(gl, n)) {
//         console.log('Failed to intialize the texture.');
//         return;
//     }
// }

// function initVertexBuffers(gl) {
//     var verticesTexCoords = new Float32Array([
//         // Vertex coordinates, texture coordinate
//         -0.5, 0.5, 0.0, 1.0,
//         -0.5, -0.5, 0.0, 0.0,
//         0.5, 0.5, 1.0, 1.0,
//         0.5, -0.5, 1.0, 0.0,
//     ]);
//     var n = 4; // The number of vertices

//     // Create the buffer object
//     var vertexTexCoordBuffer = gl.createBuffer();
//     if (!vertexTexCoordBuffer) {
//         console.log('Failed to create the buffer object');
//         return -1;
//     }

//     // Bind the buffer object to target
//     gl.bindBuffer(gl.ARRAY_BUFFER, vertexTexCoordBuffer);
//     gl.bufferData(gl.ARRAY_BUFFER, verticesTexCoords, gl.STATIC_DRAW);

//     var FSIZE = verticesTexCoords.BYTES_PER_ELEMENT;
//     //Get the storage location of a_Position, assign and enable buffer
//     var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
//     if (a_Position < 0) {
//         console.log('Failed to get the storage location of a_Position');
//         return -1;
//     }
//     gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, FSIZE * 4, 0);
//     gl.enableVertexAttribArray(a_Position);  // Enable the assignment of the buffer object

//     // Get the storage location of a_TexCoord
//     var a_TexCoord = gl.getAttribLocation(gl.program, 'a_TexCoord');
//     if (a_TexCoord < 0) {
//         console.log('Failed to get the storage location of a_TexCoord');
//         return -1;
//     }
//     // Assign the buffer object to a_TexCoord variable
//     gl.vertexAttribPointer(a_TexCoord, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);
//     gl.enableVertexAttribArray(a_TexCoord);  // Enable the assignment of the buffer object

//     return n;
// }

// function initTextures(gl, n) {
//     var texture = gl.createTexture();   // Create a texture object
//     if (!texture) {
//         console.log('Failed to create the texture object');
//         return false;
//     }

//     // Get the storage location of u_Sampler
//     var u_Sampler = gl.getUniformLocation(gl.program, 'u_Sampler');
//     if (!u_Sampler) {
//         console.log('Failed to get the storage location of u_Sampler');
//         return false;
//     }
//     var image = new Image();  // Create the image object
//     if (!image) {
//         console.log('Failed to create the image object');
//         return false;
//     }
//     // Register the event handler to be called on loading an image
//     image.onload = function () { loadTexture(gl, n, texture, u_Sampler, image); };
//     // Tell the browser to load an image
//     image.setAttribute('crossOrigin', '*')
//     image.src="https://img-thumbnail.xxpie.com/MTU4NjU3MDI2MDc4MF93eDdmZGYwYT592d197d-e876-4882-a91b-27589a366481?imageView2/1/w/350/h/350/interlace/1/q/100%7Cimageslim&e=1587871472&token=C8FPxG2IPHtDmtLKn5YCeZdF7OAlefKwHu-rPykj:_srHZ2helqdRvEiOvK-UsG08OCQ="

//     return true;
// }

// function loadTexture(gl, n, texture, u_Sampler, image) {
//     gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1); // Flip the image's y axis
//     // Enable texture unit0
//     gl.activeTexture(gl.TEXTURE0);
//     // Bind the texture object to the target
//     gl.bindTexture(gl.TEXTURE_2D, texture);

//     // Set the texture parameters
//     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
//     // Set the texture image
//     gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);

//     // Set the texture unit 0 to the sampler
//     gl.uniform1i(u_Sampler, 0);

//     gl.clear(gl.COLOR_BUFFER_BIT);   // Clear <canvas>

//     gl.drawArrays(gl.TRIANGLE_STRIP, 0, n); // Draw the rectangle
// }



var VSHADER_SOURCE = `
attribute vec4 a_Position;\n
attribute vec2 a_TexCoord;\n
varying vec2 v_TexCoord;\n
void main() {\n
    gl_Position = a_Position;\n
    v_TexCoord = a_TexCoord;\n
}\n
`


var FSHADER_SOURCE =
    '#ifdef GL_ES\n' +
    'precision mediump float;\n' +
    '#endif\n' +
    'uniform sampler2D u_Sampler;\n' +
    'varying vec2 v_TexCoord;\n' +
    'void main() {\n' +
    '  gl_FragColor = texture2D(u_Sampler, v_TexCoord);\n' +
    '}\n';


function main() {
    var canvas = document.getElementById('webgl');

    var gl = getWebGLContext(canvas);
    if (!gl) {
        console.log('Failed to get the rendering context for WebGL');
        return;
    }
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {     //初始化着色器
        console.log('init webgl fail')
    }
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // 设置顶点位置
    var n = initVertexBuffers(gl);
    if (n < 0) {
        console.log('fail to set the position of vertices');
        return;
    }
    // 配置纹理
    if (!initTextures(gl, n)) {
        return console.log('fail to init texture')
    }




}

function initVertexBuffers(gl) {

    var verticesTexCoords = new Float32Array([
        // 设置顶点、纹理坐标
        -0.5, 0.5, 0.0, 1.0,
        -0.5, -0.5, 0.0, 0.0,
        0.5, 0.5, 1.0, 1.0,
        0.5, -0.5, 1.0, 0.0,
    ]);
    var n = 4;

    //创建缓冲区对象
    var vertexTexCoordBuffer = gl.createBuffer();

    if (!vertexTexCoordBuffer) {
        console.log('fail to create the buffer object');
        return -1;
    }

    var n = 4; // The number of vertices

    // Create the buffer object
    var vertexTexCoordBuffer = gl.createBuffer();
    if (!vertexTexCoordBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
    }

    // Bind the buffer object to target
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexTexCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, verticesTexCoords, gl.STATIC_DRAW);

    var FSIZE = verticesTexCoords.BYTES_PER_ELEMENT;
    //Get the storage location of a_Position, assign and enable buffer
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    if (a_Position < 0) {
        console.log('Failed to get the storage location of a_Position');
        return -1;
    }
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, FSIZE * 4, 0);
    gl.enableVertexAttribArray(a_Position);  // Enable the assignment of the buffer object

    // Get the storage location of a_TexCoord
    var a_TexCoord = gl.getAttribLocation(gl.program, 'a_TexCoord');
    if (a_TexCoord < 0) {
        console.log('Failed to get the storage location of a_TexCoord');
        return -1;
    }
    // Assign the buffer object to a_TexCoord variable
    gl.vertexAttribPointer(a_TexCoord, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);
    gl.enableVertexAttribArray(a_TexCoord);  // Enable the assignment of the buffer object

    return n;
}

function initTextures(gl, n) {
    var texture = gl.createTexture() //创建纹理对象
    //获取u_Sampler变量的存储位置
    var u_Sampler = gl.getUniformLocation(gl.program, 'u_Sampler')
    var image = new Image()

    image.onload = function() {
        loadTexture(gl, n, texture, u_Sampler, image)
    }
    // image.src = './images/texture.jpeg'
    // image.setAttribute('crossOrigin', '*')
    // image.src="https://img-thumbnail.xxpie.com/MTU4NjU3MDI2MDc4MF93eDdmZGYwYT592d197d-e876-4882-a91b-27589a366481?imageView2/1/w/350/h/350/interlace/1/q/100%7Cimageslim&e=1587871472&token=C8FPxG2IPHtDmtLKn5YCeZdF7OAlefKwHu-rPykj:_srHZ2helqdRvEiOvK-UsG08OCQ="
    image.src = './images/texture.jpg'
    return true
}

function loadTexture(gl, n, texture, u_Sampler, image) {
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1) //对纹理进行y轴反转
    //开启0号纹理单元
    gl.activeTexture(gl.TEXTURE0)
    //像target绑定纹理对象
    gl.bindTexture(gl.TEXTURE_2D, texture)
    //配置纹理参数
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    //配置纹理图像
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image)


    //将0号纹理传给着色器
    gl.uniform1i(u_Sampler, 0)


    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, n);
    // gl.drawArrays(gl.LINES, 0, n);
    // gl.drawArrays(gl.LINE_STRIP, 0, n);
    // gl.drawArrays(gl.LINE_LOOP, 0, n);

} 

