import test from 'ava';
import fEndsWith from './';

test('Str contains .jpg', (t) => {

  t.truthy(fEndsWith('somepic.jpg', '.jpg'));

});

test('Str contains .jpg', (t) => {

  t.falsy(fEndsWith('somepic.jpeg', '.jpg'));

});

test('Str contains one of 2x arr', (t) => {

  t.truthy(fEndsWith('somepic.jpg', ['.jpg', '.jpeg']));
});

test('Str contains one of 4x arr', (t) => {

  t.truthy(fEndsWith('somefilename.txt', ['.md', '.txt', '.cson']));
});

test('Str contains one of val', (t) => {

  t.truthy(fEndsWith('somefilename.txt', ['.md', '.json', '.txt']));
});
