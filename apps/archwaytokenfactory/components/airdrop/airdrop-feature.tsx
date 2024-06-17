'use client';

import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import { AirdropBar, DistributionButton, RecipientsInfo } from './airdrop-ui';

export default function AirdropFeature() {
    const params = useParams();
    const address = useMemo(() => {
        if (!params.address) {
        return;
        }
        try {
            const addr = params.address;
            return addr;
        } catch (e) {
            console.log(`Invalid public key`, e);
        }
    }, [params]);

    if (!address) {
        return (
        <div className='h-96 text-center'>
            <h2 className="relative top-16 text-white text-lg">Provide the correct mint account</h2>
        </div>
        )
    }

    return (
        <div className="w-full">
            <div className="flex flex-col items-center justify-center gap-8 w-full p-4">
                <h2 className="text-3xl font-semibold text-white my-8">Airdrop Tokens</h2>
                <AirdropBar mint={address}/>
                <RecipientsInfo mint={address} />
                <DistributionButton mint={address} />
            </div>
        </div>
    )
}