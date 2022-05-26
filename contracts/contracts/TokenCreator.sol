//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

import {TokenBase} from './TokenBase.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract TokenCreator is Ownable {

   event publishedToken(address _token);

   function publishToken(string memory _name, string memory _symbol) external returns (address tokenAddress) {
      TokenBase deployedToken = new TokenBase(_name, _symbol);
      deployedToken.transferOwnership(msg.sender);
      emit publishedToken(address(deployedToken));
      return address(deployedToken);
   }
}