import {
    Box,
    VStack,
    Container,
    useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaGlobe, FaInstagram, FaPenNib } from "react-icons/fa";
import { FaPixiv, FaXTwitter } from "react-icons/fa6";
import { Profile } from "./components/Profile";
import { SocialLinks } from "./components/SocialLinks";
import { Achievements } from "./components/Achievements";
import { ThemeToggle } from "./components/ThemeToggle";
import { Footer } from "./components/Footer";
import { SiMisskey } from "react-icons/si";

const me = {
    name: "Zakki",
    description: "低レイヤー、サイバーセキュリティ、お絵描きとかやってます",
    avatarUrl: "https://github.com/zakki0925224.png",
};

const links = [
    { title: "GitHub", url: "https://github.com/zakki0925224", icon: FaGithub },
    { title: "X (旧Twitter)", url: "https://x.com/zakki0925224", icon: FaXTwitter },
    { title: "mixi2", url: "https://mixi.social/@zakki0925224", icon: FaGlobe },
    { title: "Misskey.io", url: "https://misskey.io/@zakki0925224", icon: SiMisskey },
    { title: "Instagram", url: "https://www.instagram.com/zakki0925224_", icon: FaInstagram },
    { title: "pixiv", url: "https://www.pixiv.net/users/122707497", icon: FaPixiv },
    { title: "zebian.log (hatenablog)", url: "https://zebian.hatenablog.com", icon: FaPenNib },
];

const achievements = [
    { title: "Web×IoT メイカーズチャレンジ 2019-20 in 群馬", url: "https://webiotmakers.github.io/2019/gunma/", year: 2019 },
    { title: "セキュリティ・キャンプ全国大会2022 オンライン", url: "https://www.ipa.go.jp/jinzai/security-camp/2022/zenkoku/index.html", year: 2022, description: "Y1 OS自作ゼミ" },
    { title: "セキュリティ・キャンプ全国大会2023", url: "https://www.ipa.go.jp/jinzai/security-camp/2023/zenkoku/index.html", year: 2023, description: "Z2 Rust製Linux向けアンチウイルス実装ゼミ" },
    { title: "第8回セキュリティコンテスト MBSD Cybersecurity Challenges 2023", url: "https://www.mbsd.jp/company/sustainability/mbsdcc2023/", year: 2023 },
    { title: "Kernel/VM探検隊@東京 No18", url: "https://kernelvm.connpass.com/event/355100/", year: 2025, description: "LT登壇「自作OSでDOOMを動かしてみた」" },
    { title: "NT東京2025", url: "https://nt-tokyo.org/exhibitor/2025/61", year: 2025, description: "自作CPU & 自作シンセ" },
    { title: "CEATEC 2025", url: "https://www.ceatec.com/ja/", year: 2025, description: "ネクストジェネレーションパーク（学校出展）にて自作CPU展示" }
];

export function App() {
    const bg = useColorModeValue("gray.50", "gray.900");

    return (
        <Box minH="100vh" bg={bg} py={10} position="relative">
            <ThemeToggle />
            <Container maxW="container.md">
                <VStack gap={8} align="stretch">
                    <Profile {...me} />
                    <SocialLinks links={links} />
                    <Achievements items={achievements} />
                    <Footer />
                </VStack>
            </Container>
        </Box>
    );
}

export default App;
