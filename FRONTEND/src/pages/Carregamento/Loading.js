import React from "react";
import { View, Modal, ActivityIndicator} from "react-native";


export default function Loading ({visible}){
    return (
        <Modal transparent visible={visible}>
            <View style={{
                flex: 1, 
                alignItems: 'center', 
                justifyContent: 'center',
                //position: 'absolute',
                }}>
                <ActivityIndicator
                size="250%"
                color={"#1D1238"}
                animating={true}
                />

            </View>

        </Modal>

    )
};