import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';

const files = await imagemin(['../responsive-compress/build-responsive/*.{jpg,png}'], {
	destination: '../img-final',
	plugins: [
		imageminJpegtran({ quality: 80 }),
		imageminPngquant({ quality: 0.8 })
	]
});

console.log(files);