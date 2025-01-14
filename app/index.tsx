import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { Link, Redirect } from 'expo-router';

const App = () => {
    return (
        <Redirect href='/home' />
        // <SafeAreaView>
        //     <View className='mt-6 mx-2.5 bg-secondary-200'>
        //         <Text className='text-3xl' style={{ fontFamily: 'WorkSans-Black' }}>
        //             Hola mundo
        //         </Text>
        //         <Text className='text-3xl font-work-black text-primary'>Hola mundo</Text>
        //         <Text className='text-3xl font-work-light'>Hola mundo</Text>
        //         <Text className='text-3xl font-work-medium text-primary'>Hola mundo</Text>

        //         <Link href='/products' className='text-3xl text-primary'>
        //             Ir a productos
        //         </Link>
        //     </View>
        // </SafeAreaView>
    );
};

export default App;
