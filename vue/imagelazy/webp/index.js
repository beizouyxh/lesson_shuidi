// const webp = require('webp-converter');
// webp.cwebp("test.jpg", "text.webp", "-q 80", function(status, error) {
//     console.log(status, error);
// })

const lpip = require('lpip');
const file = ('./in.png');
lpip.base64(file)
    .then(res => {
        console.log(res);
    })