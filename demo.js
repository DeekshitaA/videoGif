//var canvas = document.getElementById('canvas');
//var context = canvas.getContext('2d');

function clearCanvas() {
    //context.clearRect(0, 0, canvas.width, canvas.height);
}

function createGif(array) {
    gifshot.createGIF({
        //images: ['/yay.jpg'],
        video: ['/SBS_08-02_Craft_640.mov', '/yay.mov'],
        // Desired width of the image
        'gifWidth': 200,
        // Desired height of the image
        'gifHeight': 200,
        'interval': 0.1,
// The number of frames to use to create the animated GIF
// Note: Each frame is captured every 100 milleseconds of a video and every ms for existing images
        'numFrames': 80,
// The text that covers the animated GIF
        'text': '',
// The font weight of the text that covers the animated GIF
        'fontWeight': 'normal',
// The font size of the text that covers the animated GIF
        'fontSize': '16px',
// The minimum font size of the text that covers the animated GIF
// Note: This option is only applied if the text being applied is cut off
        'minFontSize': '10px',
        'fontFamily': 'sans-serif',
// The font color of the text that covers the animated GIF
        'fontColor': '#ffffff',
// The horizontal text alignment of the text that covers the animated GIF
        'textAlign': 'center',
// The vertical text alignment of the text that covers the animated GIF
        'textBaseline': 'bottom',
    }, function (obj) {
        if (!obj.error) {
            var image = obj.image,
                animatedImage = document.createElement('img');
            animatedImage.src = image;
            document.body.appendChild(animatedImage);
        }
    });
}

$("#button").on('click', function () {
    //var array = [];
    ////drawCircle();
    //array.push(canvas.toDataURL("image/png"));
    //clearCanvas();
    //drawRect();
    //array.push(canvas.toDataURL("image/png"));
    //clearCanvas();
    //drawSemiCirc();
    //array.push(canvas.toDataURL("image/png"));
    createGif();
});