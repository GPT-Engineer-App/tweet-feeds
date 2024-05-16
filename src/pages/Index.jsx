import React from "react";
import { Container, VStack, HStack, Box, Text, Avatar, IconButton, Input, Button, Divider } from "@chakra-ui/react";
import { FaTwitter, FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaListAlt, FaUser, FaEllipsisH, FaRegComment, FaRetweet, FaHeart, FaShareSquare } from "react-icons/fa";

const Tweet = ({ avatar, username, handle, time, content }) => (
  <Box w="100%" p={4} borderBottom="1px" borderColor="gray.200">
    <HStack align="start">
      <Avatar src={avatar} />
      <VStack align="start" spacing={1} w="100%">
        <HStack w="100%" justify="space-between">
          <HStack spacing={2}>
            <Text fontWeight="bold">{username}</Text>
            <Text color="gray.500">@{handle}</Text>
            <Text color="gray.500">· {time}</Text>
          </HStack>
          <IconButton aria-label="More options" icon={<FaEllipsisH />} size="sm" variant="ghost" />
        </HStack>
        <Text>{content}</Text>
        <HStack spacing={6}>
          <HStack spacing={1}>
            <IconButton aria-label="Comment" icon={<FaRegComment />} size="sm" variant="ghost" />
            <Text>12</Text>
          </HStack>
          <HStack spacing={1}>
            <IconButton aria-label="Retweet" icon={<FaRetweet />} size="sm" variant="ghost" />
            <Text>34</Text>
          </HStack>
          <HStack spacing={1}>
            <IconButton aria-label="Like" icon={<FaHeart />} size="sm" variant="ghost" />
            <Text>56</Text>
          </HStack>
          <IconButton aria-label="Share" icon={<FaShareSquare />} size="sm" variant="ghost" />
        </HStack>
      </VStack>
    </HStack>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.lg" p={0}>
      <HStack align="start" spacing={0}>
        {/* Sidebar */}
        <VStack w="20%" p={4} spacing={6} align="start" borderRight="1px" borderColor="gray.200">
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" variant="ghost" color="blue.500" />
          <IconButton aria-label="Home" icon={<FaHome />} size="lg" variant="ghost" />
          <IconButton aria-label="Explore" icon={<FaHashtag />} size="lg" variant="ghost" />
          <IconButton aria-label="Notifications" icon={<FaBell />} size="lg" variant="ghost" />
          <IconButton aria-label="Messages" icon={<FaEnvelope />} size="lg" variant="ghost" />
          <IconButton aria-label="Bookmarks" icon={<FaBookmark />} size="lg" variant="ghost" />
          <IconButton aria-label="Lists" icon={<FaListAlt />} size="lg" variant="ghost" />
          <IconButton aria-label="Profile" icon={<FaUser />} size="lg" variant="ghost" />
          <IconButton aria-label="More" icon={<FaEllipsisH />} size="lg" variant="ghost" />
          <Button colorScheme="twitter" w="100%">
            Tweet
          </Button>
        </VStack>

        {/* Main Content */}
        <VStack w="60%" spacing={0}>
          <Box w="100%" p={4} borderBottom="1px" borderColor="gray.200">
            <Text fontSize="xl" fontWeight="bold">
              Home
            </Text>
          </Box>
          <Box w="100%" p={4} borderBottom="1px" borderColor="gray.200">
            <HStack spacing={4}>
              <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNTczMDg3N3ww&ixlib=rb-4.0.3&q=80&w=1080" />
              <Input placeholder="What's happening?" variant="unstyled" />
            </HStack>
            <HStack justify="flex-end" mt={4}>
              <Button colorScheme="twitter">Tweet</Button>
            </HStack>
          </Box>
          <Tweet avatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNTczMDg3N3ww&ixlib=rb-4.0.3&q=80&w=1080" username="John Doe" handle="johndoe" time="2h" content="This is a sample tweet." />
          <Tweet avatar="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNTczMDg3N3ww&ixlib=rb-4.0.3&q=80&w=1080" username="Jane Smith" handle="janesmith" time="3h" content="Another example of a tweet." />
        </VStack>

        {/* Right Sidebar */}
        <VStack w="20%" p={4} spacing={6} align="start" borderLeft="1px" borderColor="gray.200">
          <Input placeholder="Search Twitter" variant="filled" borderRadius="full" />
          <Box w="100%" p={4} bg="gray.100" borderRadius="md">
            <Text fontSize="lg" fontWeight="bold">
              What's happening
            </Text>
            <Divider my={2} />
            <Text>Trending Topic 1</Text>
            <Divider my={2} />
            <Text>Trending Topic 2</Text>
            <Divider my={2} />
            <Text>Trending Topic 3</Text>
          </Box>
        </VStack>
      </HStack>
    </Container>
  );
};

export default Index;
