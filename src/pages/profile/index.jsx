import React, { useState } from 'react';
import { ethers } from 'ethers';
import trxAbi from '../../../artifacts/contracts/Transaction.sol/TransactionContract.json';
import TierCard from '../../components/tier-card';

const ProfilePage = () => {
  const trxAddress = '0x51882e98084074989b9407338E84e2E7525ba8e2';

  // data transaction
  const [transactionData, setTransactionData] = useState({
    amount: '',
    receiver: '',
  })

  const handleTransaction = async (amount, receiver) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const signerAddress = await signer.getAddress();
    const contract = new ethers.Contract(trxAddress, trxAbi.abi, signer);
    const transactionAmount = ethers.utils.parseEther(amount);

    try {
      const tx = await contract.addTransactionAndSendEther(
        receiver,
        transactionAmount,
        {
          value: transactionAmount
        }
      );
      alert('Pembayaran anda sedang diproses');
      await tx.wait();
      alert('Pembayaran anda berhasil');
    } catch (error) {
      console.log('handleTransaction', error);
      alert('Pembayaran dibatalkan');
    }
  };

  const userProfile = {
    name: 'Kinda Funny Games',
    desc: 'Creating an independent production company and podcast network',
    avatarUrl: '/assets/avatar.png',
    coverUrl: '/assets/bg-avatar.png',
    walletAddress: '0x5096d9D55118D958D31A3E62EcC55d3f598f7249' // alamat wallet penerima
  };

  const tierData = [
    {
      image: '/assets/tier/tier-1.png',
      description: 'Get all of Kinda Funny’s shows ad-free as both audio and video. This includes: The Kinda Funny Podcast, In Review, the Kinda Funny Gamescast, PS I Love You XOXO, the Kinda Funny Xcast, Kinda Funny Games Daily, Kinda Funny Game Showdown (no audio version), and Kinda Funny Screencast (when applicable.)',
      price: '0.0000000000001',
    },
    {
      image: '/assets/tier/tier-2.png',
      description: 'Get all of Kinda Funny’s shows ad-free as both audio and video. This includes: The Kinda Funny Podcast, In Review, the Kinda Funny Gamescast, PS I Love You XOXO, the Kinda Funny Xcast, Kinda Funny Games Daily, Kinda Funny Game Showdown (no audio version), and Kinda Funny Screencast (when applicable.)',
      price: '0.003',
    },
    {
      image: '/assets/tier/tier-3.png',
      description: 'Get all of Kinda Funny’s shows ad-free as both audio and video. This includes: The Kinda Funny Podcast, In Review, the Kinda Funny Gamescast, PS I Love You XOXO, the Kinda Funny Xcast, Kinda Funny Games Daily, Kinda Funny Game Showdown (no audio version), and Kinda Funny Screencast (when applicable.)',
      price: '0.005',
    },
  ];

  return (
    <div>
      <div className="bg-[url('/assets/bg-avatar.png')] bg-no-repeat bg-cover text-white p-4 h-[400px]">
        <div className="flex items-center justify-between px-60 mt-[270px] text-black">
          <div className="flex items-center justify-between gap-8 w-full">
            <img
              src={userProfile.avatarUrl}
              alt="Avatar"
              className="w-36 h-56"
            />
            <div className="text-center font-bold mt-32">
              <h1 className="text-2xl">{userProfile.name}</h1>
              <p className="text-lg">{userProfile.desc}</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="px-60 mt-40 my-8">
        <div className="space-y-8">
          {tierData.map((data,idx) => (
            <TierCard key={idx} image={data.image} description={data.description} price={data.price} onClick={() => handleTransaction(data.price, userProfile.walletAddress)}  />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;