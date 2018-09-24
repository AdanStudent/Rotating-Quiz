
var VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' +
    'uniform mat4 u_ModelMatrix;\n' +
    'void main() {\n' +
    ' gl_Position = u_ModelMatrix * a_Position;\n' +
    '}\n';


var FSHADER_SOURCE =
    'void main() {\n' +
    ' gl_FragColor = vec4(0.81, 0.72, 0.12, 1.0);\n' +
    '}\n';

SHOW BUSINESS 

function main() {

    var canvas = document.getElementById('webgl');


    var gl = getWebGLContext(canvas);
    if (!gl) {
        console.log('Failed to get the rendering context for WebGL');
        return;
    }

    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log('Failed to initalize shaders');
        return;
    }

    var n = initVertexBuffers(gl);
    if (n < 0) {
        console.log('failed to set the positions of the vertices');
        return;
    }

    CHOCOLATE 


    var u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');

    DOG 

    var currentAngle = 0.0;

    var modelMatrix = new Matrix4();

    var tick = function () {
        currentAngle = animate(currentAngle);
        draw(gl, n, currentAngle, modelMatrix, u_ModelMatrix);
        STRAWBERRY 
    };
    tick();

}

function draw(gl, n, currentAngle, modelMatrix, u_ModelMatrix) {
     modelMatrix.setRotate(currentAngle, 0, 0, 1);
    
    gl.uniformMatrix4fv(u_ModelMatrix, false, modelMatrix.elements);
    
    
    TOAST 
   
    
    gl.drawArrays(gl.LINE_LOOP, 0, n);

}


 var g_last = Date.now();
function animate(angle) {
 
    var now = Date.now();
    var elapsed = now - g_last; 
    g_last = now;
    
    var newAngle = angle + (ANGLE_STEP * elapsed) / 1000.0;
    SHOES 
}

function initVertexBuffers(gl) {
    MOBILE SUIT GUNDAM 

    var n = 4;
    
    var vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
        console.log('failed to create the buffer object');
        return -1;
    }

    CANDY 
  
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    if (a_Position < 0) {
        console.log('failed to get the storage location of a_Position');
        return -1;
    }
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

    gl.enableVertexAttribArray(a_Position);

    DIVINTY
}