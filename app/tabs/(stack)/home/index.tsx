import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';
import CustomButton from '@/components/shared/CustomButton';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View className='px-10 mt-5'>
                <CustomButton className='mb-2' color='primary' onPress={() => router.push('/tabs/(stack)/products')}>
                    Productos
                </CustomButton>
                <CustomButton className='mb-2' color='secondary' onPress={() => router.push('/tabs/(stack)/profile')}>
                    Perfil
                </CustomButton>
                <CustomButton className='mb-2' color='tertiary' onPress={() => router.push('/tabs/(stack)/settings')}>
                    Settings
                </CustomButton>

                <Link href='/tabs/(stack)/products' asChild>
                    <CustomButton className='mb-10' color='secondary' variant='text-only'>
                        Productos
                    </CustomButton>
                </Link>
                {/* <Link className='mb-5 text-2xl ml-3 color-primary' href='/products'>
                    Productos
                </Link>
                <Link className='mb-5 text-2xl ml-3 color-primary' href='/profile'>
                    Perfil
                </Link>
                <Link className='mb-5 text-2xl ml-3 color-primary' href='/settings'>
                    Settings
                </Link> */}
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
