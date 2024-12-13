"use client";

import React, { useState, ChangeEvent, KeyboardEvent, useRef, useEffect } from "react";
import { Text, VStack, HStack, Input, Button, Flex, Icon, Box, useColorModeValue } from "@chakra-ui/react";
import { MessageSquare, Send, Loader } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import { useCreateMessage, useOnCreateMessageSubscription, useListMessages } from "@/hooks/userHooks";
import { Sidebar } from "@/app/components/user-sidebar-with-header/Sidebar";

interface Message {
  text: string;
  sender: string;
  createdAt?: string;
}

const SupportChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const currentUser = "user";
  const { userData } = useAuth();
  const barColor = useColorModeValue("white", "#121212");
  const bgColor = useColorModeValue("rgba(0,0,0,.1)", "rgba(255,255,255,.1)");
  const chatColor = useColorModeValue("white", "#121212");
  const chatMessageColor = useColorModeValue("black", "white");

  const { createMessage, loading: loadingMessage } = useCreateMessage();
  const { data: subscriptionData, error: subErr } = useOnCreateMessageSubscription(userData?.id || "");
  const { data: messageList, loading: loadingMessages } = useListMessages({
    variables: { filter: { userId: { eq: userData?.id || "" } } },
  });

  // Format timestamp to readable time
  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  useEffect(() => {
    if (messageList?.listMessages?.items) {
      const initialMessages = messageList.listMessages.items
        .slice()
        .sort((a, b) => {
          const dateA = a?.createdAt ? new Date(a.createdAt).getTime() : 0;
          const dateB = b?.createdAt ? new Date(b.createdAt).getTime() : 0;
          return dateA - dateB;
        })
        .map((e) => ({
          text: e?.content || "",
          sender: e?.sender || "",
          createdAt: e?.createdAt,
        }));
      setMessages(initialMessages as Message[]);
    }
  }, [messageList]);

  useEffect(() => {
    if (subscriptionData?.onCreateMessage) {
      const newMessage = {
        text: subscriptionData.onCreateMessage.content,
        sender: subscriptionData.onCreateMessage.sender,
        createdAt: subscriptionData.onCreateMessage.createdAt,
      };
      setMessages((prev) => [...prev, newMessage]);
      setIsTyping(false);
    }
  }, [subscriptionData]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  // Simulate typing indicator when support receives a message
  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].sender === "user") {
      setIsTyping(true);
      const timeout = setTimeout(() => setIsTyping(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessage = {
        id: new Date().getTime().toString(),
        userId: userData?.id,
        klaravia_user_id: userData?.salesforceId,
        content: input,
        sender: "user",
        receiver: "support",
      };

      try {
        await createMessage({ variables: { input: newMessage } });
        setInput("");
        inputRef.current?.focus();
      } catch (error) {
        console.error("Failed to send message:", error);
      }
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Sidebar>
      <Flex flexDirection="column" h="94vh" p="20px" className="rounded-lg" bgColor={bgColor}>
        {/* Chat Container */}
        <VStack flex={1} w="full" overflowY="auto" bgColor={chatColor} className="border border-white/10 rounded-lg backdrop-blur-sm" spacing={4} p="20px">
          {/* Header */}
          <HStack w="full" className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-lg" p={4} mb={6}>
            <MessageSquare className="w-6 h-6 text-amber-500" />
            <HStack spacing={0} gap={0} m="0px" p="0px" pb="4px" align="stretch" color="white">
              <Text w="full" textAlign="center" fontSize="22px" fontFamily="'new-astro', sans-serif" p={1} pb="0px">
                Klaravia
              </Text>
              <Text w="full" textAlign="center" fontSize="22px" fontWeight="semibold" fontFamily="'eurostile', sans-serif" p={1} pb="2px">
                Support
              </Text>
            </HStack>
          </HStack>

          {/* Messages */}
          <AnimatePresence>
            {loadingMessages ? (
              <VStack w="full" h="55vh" justifyContent="center">
                <Loader className="w-8 h-8 text-amber-500 animate-spin" />
                <Text className="text-blue-50/70">Loading messages...</Text>
              </VStack>
            ) : (
              <VStack w="full" spacing={4}>
                {messages.length === 0 ? (
                  <VStack w="full" h="55vh" justifyContent="center" spacing={4}>
                    <Box className="p-4 rounded-full bg-amber-500/10">
                      <MessageSquare className="w-8 h-8 text-amber-500" />
                    </Box>
                    <Text className="text-blue-50/70 text-center">Start your conversation with Klaravia support</Text>
                  </VStack>
                ) : (
                  messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`w-full flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <Flex maxW="70%" direction="column" gap={1}>
                        <Box
                          className={`
                          p-3 rounded-lg
                          ${message.sender === "user" ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white" : "bg-white/5 text-blue-50"}
                        `}
                        >
                          <Text>{message.text}</Text>
                        </Box>
                        {message.createdAt && (
                          <Text
                            fontSize="xs"
                            className={`
                            ${message.sender === "user" ? "text-blue-50/50 text-right" : "text-blue-50/50"}
                          `}
                          >
                            {formatTime(message.createdAt)}
                          </Text>
                        )}
                      </Flex>
                    </motion.div>
                  ))
                )}
                <div ref={messagesEndRef} />
                {isTyping && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="w-full flex justify-start">
                    <Box className="bg-white/5 px-4 py-2 rounded-lg">
                      <Text className="text-blue-50/70">Support is typing...</Text>
                    </Box>
                  </motion.div>
                )}
              </VStack>
            )}
          </AnimatePresence>
        </VStack>

        {/* Input Area */}
        <HStack w="full" spacing={2} position="sticky" bottom="20px" mt="20px" className="rounded-lg py-4">
          <Input
            ref={inputRef}
            h="54px"
            bgColor={barColor}
            color={chatMessageColor}
            fontFamily="sans-serif"
            className="border-2 border-white/10 dark:placeholder-blue-50/50"
            placeholder="Type your message..."
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            _focus={{
              borderColor: "amber.500",
              boxShadow: "none",
            }}
          />
          <Button
            _hover={{ bgColor: "orange.400" }}
            bgColor="orange"
            h="50px"
            w="50px"
            className={`
            rounded-lg transition-all duration-200`}
            onClick={handleSendMessage}
            isDisabled={!input.trim() || loadingMessage}
          >
            {loadingMessage ? <Loader className="w-5 h-5 text-white animate-spin" /> : <Send className="w-5 h-5 text-white" />}
          </Button>
        </HStack>
      </Flex>
    </Sidebar>
  );
};

export default SupportChat;
