import { sha256 } from "js-sha256";

interface Block {
  timestamp: number;
  data: any;
  prevBlockHash: string;
  hash: string;
  height: number;
  nonce: number;
}

const targetBits = 6;

const blockChain: Block[] = [];

function main() {
  appendBlock("Genesis Block");
  appendBlock("Send 1 BTC to Ivan");
  appendBlock("Send 2 more BTC to Ivan");

  for (let index = 0; index < blockChain.length; index++) {
    const element = blockChain[index];
    console.info(element.prevBlockHash, element.data, element.height, element.hash, validate(powHash(element)));
    prepareData(element);
  }
}

main();

function newBlock(data: any, prevBlockHash: string): Block {
  let block: Block = {
    timestamp: Date.now(),
    data: data,
    prevBlockHash,
    hash: "",
    height: 0,
    nonce: 0,
  };

  let _block = blockChain[blockChain.length - 1];
  if (_block) {
    block.height = _block.height + 1;
  }
  block.hash = setHash(block);
  return block;
}

function powHash(block: Block) {
  let _data = prepareData(block);
  return sha256(_data).toString();
}

function validate(hash: string) {
  return hash.substr(0, targetBits) === "0"["padStart"](targetBits, "0");
}

function appendBlock(data: any) {
  let prevBlock: Block = blockChain[blockChain.length - 1];
  let block: Block;
  if (!prevBlock) {
    block = genesisBlock(data);
  } else {
    block = newBlock(data, prevBlock.hash);
  }
  while (true) {
    let _hash = powHash(block);
    if (validate(_hash)) {
      console.info(_hash);
      break;
    } else {
      ++block.nonce;
    }
  }

  blockChain.push(block);
}

function setHash(block: Block) {
  let header = `${block.prevBlockHash}${block.data}${block.timestamp}`;
  return sha256(header).toString();
}

function prepareData(block: Block) {
  return `${block.prevBlockHash}${block.data}${block.timestamp}${targetBits}${block.nonce}`;
}

function genesisBlock(data = "Genesis Block"): Block {
  return newBlock(data, "");
}
