import {
  Center,
  Heading,
  Stack,
  Divider,
  Tag,
  TagLabel,
  TagRightIcon,
  HStack,
  useTheme,
  Theme,
  Input,
} from "@chakra-ui/react";
import { IconCircle, IconCircleX, IconTag } from "@tabler/icons-react";

interface TodoItem {
  id: string;
  title: string;
  tags: string[];
  isComplete: boolean;
  priority: number;
}

const todos: TodoItem[] = [
  {
    id: "1",
    title: "Learn to code",
    priority: 1,
    isComplete: true,
    tags: [],
  },
  {
    id: "2",
    title: "Take out the trash",
    priority: 0,
    isComplete: false,
    tags: ["Habits", "Chores"],
  },
  {
    id: "3",
    title: "Read a good book",
    priority: 0,
    isComplete: false,
    tags: ["Habits"],
  },
];

function App() {
  const theme: Theme = useTheme();
  return (
    <Center w="100vw" h="100vh">
      <Stack p={4} border="0.5px solid #eee" borderRadius={10} w="600px">
        <Heading>My Awesome Todos</Heading>
        <Divider />
        <Stack spacing={4}>
          {todos.map((todo) => (
            <HStack
              key={todo.id}
              p={3}
              border="0.5px solid #eee"
              borderRadius={10}
              align="start"
              cursor="pointer"
              _hover={{
                bg: "#fafafa",
              }}
            >
              {todo.isComplete ? (
                <IconCircleX color={theme.colors.blue[500]} />
              ) : (
                <IconCircle color="#ddd" />
              )}
              <Stack>
                <Heading
                  size="md"
                  fontWeight={400}
                  textDecor={todo.isComplete ? "line-through" : undefined}
                >
                  {todo.title}
                </Heading>
                {todo.tags.length > 0 ? (
                  <HStack>
                    {todo.tags.map((tag) => (
                      <Tag
                        key={tag}
                        variant="outline"
                        colorScheme="blue"
                        px={2}
                        py={1}
                      >
                        <HStack align="center" justify="center" gap={0}>
                          <TagLabel>{tag}</TagLabel>
                          <TagRightIcon as={IconTag} />
                        </HStack>
                      </Tag>
                    ))}
                  </HStack>
                ) : null}
              </Stack>
            </HStack>
          ))}
        </Stack>
        <Divider />
        <Input placeholder="Add todo" />
      </Stack>
    </Center>
  );
}

export default App;
