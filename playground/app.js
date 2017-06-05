// // Prueba
// process.stdin.setEncoding('utf8');

// process.stdin.on('readable', () => {
//     var input = process.stdin.read();

//     if (input !== null) {
//         process.stdout.write(input);

//         var command = input.trim();
//         if (command === 'exit') {
//             process.exit(0);
//         }
//     }



// })

// let buf = new Buffer('New string');
// console.log(buf);

// buf.fill(0);

// 'use strict';
// let a = [1, 2, 3];
// let b = Buffer.from(a);
// console.log(b);
// let a2 = new Uint8Array([1, 2, 3]);
// let b2 = Buffer.from(a2);
// console.log(b2);
// let b3 = Buffer.alloc(10);
// console.log(b3);
// let b4 = Buffer.allocUnsafe(10);
// console.log(b4);

"use strict";

// let buf = new Buffer('This is my pretty example');
// let json = JSON.stringify(buf);
// console.log(json);

// let buf = new Buffer('This is my pretty example');
// let json = JSON.stringify(buf);

// let buf2 = new Buffer(JSON.parse(json).data);

// console.log(buf2.toString('utf8', 11, 17));

// let StringDecoder = require('string_decoder').StringDecoder;
// let decoder = new StringDecoder('utf8');

// let euro = new Buffer([0xE2, 0x82]);
// let euro2 = new Buffer([0xAC]);

// console.log(decoder.write(euro));
// console.log(decoder.write(euro2));
// console.log(euro.toString());
// console.log(euro2.toString());

// let buf = new Buffer(2);
// let buf = new Buffer(1);
// buf.write('€', 'utf-8');
// console.log(decoder.write(buf));

var buf = new Buffer(4);
// write values to buffer
buf.writeUInt8(0x63, 0);
buf.writeUInt8(0x61, 1);
buf.writeUInt8(0x74, 2);
buf.writeUInt8(0x73, 3);
// now print out buffer as stri
console.log(buf.toString());