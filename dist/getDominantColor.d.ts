export default function getDominantColor(imagePath: string): Promise<{
    rgp: string;
    hexa: string;
} | undefined>;
