import { useNavigation } from "@react-navigation/native";
import { Button, Image, View } from "tamagui";
import Fontisto from '@expo/vector-icons/Fontisto';
import { SafeAreaView } from "react-native-safe-area-context";

// Navigation bar for the app with constant user and bell buttons and customizable center element
export default function NavBar({ centerComponent }) { // TODO:- Checkout TS type issue - Harshita
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View
                height={60}
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                paddingHorizontal={20}
                backgroundColor={"#5D5D5D"}
            >
                <Button 
                    circular 
                    bg={"#000000"} 
                    borderWidth={0} 
                    icon={
                        <Image 
                            src={require("../assets/images/user.png")} 
                            pressStyle={{
                                backgroundColor:"#000000"
                            }}
                        />
                    }
                />
                <View>
                    {centerComponent}
                </View>
                <Button 
                    circular 
                    bg={"#00000000"} 
                    pressStyle={{
                        backgroundColor:"#00000000", 
                        borderColor:"$colorTransparent"
                    }}
                >
                    <Fontisto 
                        name="bell" 
                        size={24} 
                        color="white" 
                    />
                </Button>
            </View>
        </SafeAreaView>
    )
}