import Box from "@/src/components/Box/Box";
import Text from "@/src/components/Text/Text";
import TextClass from './../../../../theme/defaults/TextClass';

export default function Footer() {
  return (
    <Box className="mt-auto w-full bg-neutral-900 text-neutral-000 h-20 flex items-center justify-center">
      <Text variant={TextClass.body2}>
        Feito por Wesley Alcantara
      </Text>
    </Box>
  );
}
