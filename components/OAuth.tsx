import { View, Text, Image } from 'react-native';
import CustomButton from './CustomButton';
import { icons } from '@/constants';

const OAuth = () => {
  const handleGoogleSignIn = async () => {
  };
  return(


  <View>
    <View className="mt-4 flex flex-row items-center justify-center gap-x-3">
      <View className="h-[1px] flex-1 bg-general-100" />
      <Text className="text-lg">Or</Text>
      <View className="h-[1px] flex-1 bg-general-100" />
    </View>
    <CustomButton
    title="Login with Google" className='mt-5 w-full shadow-none' IconLeft={() => (
        <Image source={icons.google} resizeMode= "contain" className = 'w-5 h-5 mx-2' />
    )}
    bgVariant='outline'
    textVariant='primary'
    onPress={handleGoogleSignIn}
    />
  </View>
  );
};
export default OAuth;
