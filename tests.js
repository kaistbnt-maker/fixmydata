// node tests.js - tests the published index.html parser without a browser dependency
const fs=require('node:fs');const assert=require('node:assert/strict');
const html=fs.readFileSync('index.html','utf8');
const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
assert(scripts.length===1,'Inline application script must exist');
const script=scripts[0][1];
const code=script.slice(script.indexOf('function parse('),script.indexOf('function show('));
const api=new Function(code+';return {parse,sniff,inspect}')();
const cases=[
()=>assert.deepEqual(api.parse('a,b\n1,2',',').rows.map(r=>r.values),[['a','b'],['1','2']]),
()=>assert.deepEqual(api.parse('a,b\n"a,b","x""y"',',').rows[1].values,['a,b','x"y']),
()=>assert.equal(api.parse('a,b\n"a\nb",c',',').rows[1].values[0],'a\nb'),
()=>assert.equal(api.sniff('a\tb\n1\t2'),'\t'),
()=>assert.equal(api.sniff('a;b\n1;2'),';'),
()=>assert(api.inspect('a,b\n1,2\n3',',').issues.some(i=>i.message.includes('열 개수'))),
()=>assert(api.inspect('a,b\n"oops',',').issues.some(i=>i.message.includes('닫히지'))),
()=>assert.equal(api.parse('',',').rows.length,0),
()=>assert.equal(api.parse('"a""b",c',',').rows[0].values[0],'a"b'),
()=>assert.equal(api.parse('a,b\r\n1,2',',').rows.length,2),
()=>assert.equal(api.inspect('a,b\n1,2',',').cols,2)
];cases.forEach((run,i)=>{run();console.log('PASS',i+1)});console.log(cases.length+' tests passed');
