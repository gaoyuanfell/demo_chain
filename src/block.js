"use strict";
exports.__esModule = true;
var js_sha256_1 = require("js-sha256");
var targetBits = 6;
var blockChain = [];
function main() {
    appendBlock("Genesis Block");
    appendBlock("Send 1 BTC to Ivan");
    appendBlock("Send 2 more BTC to Ivan");
    for (var index = 0; index < blockChain.length; index++) {
        var element = blockChain[index];
        console.info(element.prevBlockHash, element.data, element.height, element.hash, validate(powHash(element)));
        prepareData(element);
    }
}
main();
function newBlock(data, prevBlockHash) {
    var block = {
        timestamp: Date.now(),
        data: data,
        prevBlockHash: prevBlockHash,
        hash: "",
        height: 0,
        nonce: 0
    };
    var _block = blockChain[blockChain.length - 1];
    if (_block) {
        block.height = _block.height + 1;
    }
    block.hash = setHash(block);
    return block;
}
function powHash(block) {
    var _data = prepareData(block);
    return js_sha256_1.sha256(_data).toString();
}
function validate(hash) {
    return hash.substr(0, targetBits) === "0"["padStart"](targetBits, "0");
}
function appendBlock(data) {
    var prevBlock = blockChain[blockChain.length - 1];
    var block;
    if (!prevBlock) {
        block = genesisBlock(data);
    }
    else {
        block = newBlock(data, prevBlock.hash);
    }
    while (true) {
        var _hash = powHash(block);
        if (validate(_hash)) {
            console.info(_hash);
            break;
        }
        else {
            ++block.nonce;
        }
    }
    blockChain.push(block);
}
function setHash(block) {
    var header = "" + block.prevBlockHash + block.data + block.timestamp;
    return js_sha256_1.sha256(header).toString();
}
function prepareData(block) {
    return "" + block.prevBlockHash + block.data + block.timestamp + targetBits + block.nonce;
}
function genesisBlock(data) {
    if (data === void 0) { data = "Genesis Block"; }
    return newBlock(data, "");
}
