import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

const App = () => {
    return (
        <SafeAreaView>
            <View className='mt-6 mx-2.5 bg-secondary-200'>
                <Text className='text-3xl' style={{ fontFamily: 'WorkSans-Black' }}>
                    Hola mundo
                </Text>
                <Text className='text-3xl font-work-black text-primary'>Hola mundo</Text>
                <Text className='text-3xl font-work-light'>Hola mundo</Text>
                <Text className='text-3xl font-work-medium text-primary'>Hola mundo</Text>
            </View>
        </SafeAreaView>
    );
};

export default App;
