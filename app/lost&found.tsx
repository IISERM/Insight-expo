import React from "react";
import { Accordion, Button, Image, Input, Label, Square, Text, TextArea, View, XStack, YGroup, YStack} from "tamagui";
import { CirclePlus } from '@tamagui/lucide-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Lost_Found() {
    
    return (
        <View
            backgroundColor={"#0D0D0D"}
            flex={1}
            >
            <YStack
                gap = "12"
                margin = "3"
                padding={2}
                bg={"#141414"}
                marginTop={20}
                borderTopLeftRadius={30}
                borderTopRightRadius={30}
                flex={1}
                justifyContent="space-between"
            >
                <YGroup 
                    gap={12} 
                    marginTop={20}
                >
                    <Text 
                        textAlign="center" 
                        color={"#838181"} 
                        fontSize={14}
                    >
                        Your post will be auto-deleted within 5 days
                    </Text>

                    <Accordion type="multiple">
                        <Accordion.Item value="a1">
                            <Accordion.Trigger 
                                flexDirection="row" 
                                gap={10} 
                                bg={"#00000000"} 
                                borderColor={"#00000000"} 
                                pressStyle={{
                                    backgroundColor:"#00000000", 
                                    borderColor:"$colorTransparent"
                                    }}>
                                {({
                                    open,
                                }: {
                                    open: boolean
                                }) => (
                                    <>
                                        <Square 
                                            animation={"quick"} 
                                            rotate={open ? '90deg' : '0deg'}
                                        >
                                            <AntDesign 
                                                name="caretright" 
                                                size={15} 
                                                color="#838181" 
                                            />
                                        </Square>
                                        <Text 
                                            color={"#838181"}   
                                            fontSize={14}
                                        >
                                            Item info
                                        </Text>
                                    </>
                                )}
                            </Accordion.Trigger>

                            <Accordion.HeightAnimator animation={'medium'}>
                                <Accordion.Content 
                                    bg={"#00000000"}
                                >
                                    <YStack 
                                        gap={5}
                                    >
                                        <XStack 
                                            alignItems="center" 
                                            gap={20}
                                        >
                                            <Label 
                                                htmlFor="name" 
                                                color={"#D1D1D1"} 
                                                fontSize={20}
                                            >
                                                Item:
                                            </Label>
                                            <Input 
                                                flex={1} 
                                                id="name" 
                                                bg={"#343434"} 
                                                borderColor={"#343434"} 
                                                color={"white"}
                                            />
                                        </XStack>

                                        <Label 
                                            htmlFor="description" 
                                            color={"#D1D1D1"} 
                                            fontSize={20}
                                        >
                                            Description:
                                        </Label>
                                        <TextArea 
                                            marginLeft={12} 
                                            id="description" 
                                            bg={"#343434"} 
                                            borderColor={"#343434"} 
                                            color={"white"}
                                        />

                                        <XStack 
                                            alignItems="center" 
                                            gap={4} 
                                            justifyContent="space-between"
                                        >
                                            <Label 
                                                htmlFor="Upload Image" 
                                                color={"#D1D1D1"} 
                                                fontSize={20}
                                            >
                                                Upload Image:
                                            </Label>
                                            <Button 
                                                alignSelf="center" 
                                                size={30} 
                                                icon={CirclePlus} 
                                                color={"#D1D1D1"} 
                                                bg={"#10504C"} 
                                                fontSize={14}
                                            >
                                                Add
                                            </Button>
                                            <Text 
                                                color={"#838181"} 
                                                fontSize={12}
                                            >
                                                image size limit: 10 MB
                                            </Text>
                                        </XStack>
                                    </YStack>
                                </Accordion.Content>
                            </Accordion.HeightAnimator>
                        </Accordion.Item>

                        <Accordion.Item value="a2">
                            <Accordion.Trigger 
                                flexDirection="row" 
                                gap={10} 
                                bg={"#00000000"} 
                                borderColor={"#00000000"} 
                                pressStyle={{
                                    backgroundColor:"#00000000", 
                                    borderColor:"$colorTransparent"
                                }}
                            >
                                {({
                                    open,
                                }: {
                                    open: boolean
                                }) => (
                                    <>
                                        <Square 
                                            animation={"quick"} 
                                            rotate={open ? '90deg' : '0deg'}
                                        >
                                            <AntDesign 
                                                name="caretright" 
                                                size={15} 
                                                color={"#838181"} 
                                            />
                                        </Square>
                                        <Text 
                                            color={"#838181"} 
                                            fontSize={14}
                                        >
                                            Conetnt info
                                        </Text>
                                    </>
                                )}
                            </Accordion.Trigger>
                            <Accordion.HeightAnimator animation={"medium"}>
                                <Accordion.Content 
                                    bg={"#00000000"}
                                >
                                    <YStack 
                                        gap={15}
                                    >
                                        <XStack 
                                            alignItems="center" 
                                            gap={20}
                                        >
                                            <Label 
                                                htmlFor="Name" 
                                                color={"#D1D1D1"} 
                                                fontSize={20}
                                            >
                                                Name:
                                            </Label>
                                            <Input 
                                                flex={1} 
                                                id="Name" 
                                                bg={"#343434"} 
                                                borderColor={"#343434"} 
                                                color={"white"}
                                            />
                                        </XStack>

                                        <XStack 
                                            alignItems="center" 
                                            gap={20}
                                        >
                                            <Label 
                                                htmlFor="Contact" 
                                                color={"#D1D1D1"} 
                                                fontSize={20}
                                            >
                                                Contact:
                                            </Label>
                                            <Input 
                                                flex={1} 
                                                id="Contact" 
                                                bg={"#343434"} 
                                                borderColor={"#343434"} 
                                                color={"white"}
                                            />
                                        </XStack>
                                    </YStack>
                                </Accordion.Content>
                            </Accordion.HeightAnimator>
                        </Accordion.Item>
                    </Accordion>
                </YGroup>

                <YGroup 
                    alignSelf="center" 
                    verticalAlign={"bottom"}
                >
                    <Image 
                        src={require("../assets/images/lost_found_cat.png")} 
                        height={100} 
                        width={100}
                    />
                    <Button 
                        alignSelf="center" 
                        size={40} 
                        width={100} 
                        bg={"#B580CD"} 
                        color={"#D1D1D1"} 
                        fontSize={14} 
                        pressStyle={{
                            backgroundColor:"#B580CD", 
                            borderColor:"$colorTransparent"
                        }}
                    >
                        Confirm
                    </Button>
                </YGroup>
            </YStack>
        </View>
    )
}