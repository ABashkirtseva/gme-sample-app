import React, { FormEvent} from "react";
import {Web3Provider} from "@ethersproject/providers";
import buildClient from "./client";

const Setup = () => {
  // eslint-disable-next-line no-unused-vars
  const sleep = (milliseconds: number) => new Promise(resolve =>
      // eslint-disable-next-line no-promise-executor-return
       setTimeout(resolve, milliseconds)
    );

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      buildClient().then((p: any) => {
        console.log('provider is detected');
        const web3Provider = new Web3Provider(p as any);
        web3Provider.send('eth_accounts', []).then((res: any) => {
          console.log('eth_accounts');
          console.log(res);
        });
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <button type="submit">Connect</button>
    </form>
  );
};

export default Setup;
