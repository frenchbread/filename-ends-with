import test from 'ava';
import fEndsWith from './';

test('Str contains .jpg', (t) => {

  t.is(fEndsWith('somepic.jpg', '.jpg'), true);

});

test('Str contains .jpg', (t) => {

  t.is(fEndsWith('somepic.jpeg', '.jpg'), false);

});

test('Str contains one of 2x arr', (t) => {

  t.is(fEndsWith('somepic.jpg', ['.jpg', '.jpeg']), true);
});

test('Str contains one of 4x arr', (t) => {

  t.is(fEndsWith('somefilename.txt', ['.md', '.txt', '.cson']), true);
});

test('Str contains one of val', (t) => {

  t.is(fEndsWith('somefilename.txt', ['.md', '.json', '.txt']), true);
});
