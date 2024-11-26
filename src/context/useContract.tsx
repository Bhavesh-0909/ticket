import React, { useContext, createContext, useState, useEffect } from "react";
import { Contract, BrowserProvider } from "ethers";
import { useUser } from "./userContext";
import { contractABI, contractAddress } from "@/config/contractABI";

// Define the type for the context value
type ContractContextType = Contract | null;

// Create the context with a more precise type
const ContractContext = createContext<ContractContextType>(null);

interface ContractProviderProps {
    children: React.ReactNode;
}

export const ContractProvider: React.FC<ContractProviderProps> = ({ children }) => {
    const [contract, setContract] = useState<ContractContextType>(null);
    const { userData } = useUser();

    useEffect(() => {
        // Create contract instance when signer is available
        const createContractInstance = async () => {
            try {
                // Ensure we have a wallet address
                if (!userData.current.walletAddress) {
                    console.warn("Wallet address not found");
                    return;
                }

                // Get the signer (you might need to adjust this based on your wallet connection logic)
                const provider = new BrowserProvider(window.ethereum);
                const signer = await provider.getSigner();

                // Create contract instance
                const contractInstance = new Contract(contractAddress, contractABI, signer);
                
                setContract(contractInstance);
            } catch (error) {
                console.error("Error creating contract instance:", error);
            }
        };

        createContractInstance();
    }, [userData.current.walletAddress]);

    return (
        <ContractContext.Provider value={contract}>
            {children}
        </ContractContext.Provider>
    );
};

export const useContract = () => {
    const context = useContext(ContractContext);
    
    if (context === undefined) {
        throw new Error("useContract must be used within a ContractProvider");
    }
    
    return context;
};