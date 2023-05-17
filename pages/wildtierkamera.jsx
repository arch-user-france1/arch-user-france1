import Link from "next/link";
import { Header } from "./index";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <Header></Header>

            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{maxWidth: "60vw"}}>
                    <h1>Wildlife Camera</h1>

                    <p>I've programmed a wildlife camera and built a case with my family.<br></br>
                        The <Link href="https://wildtierkamera.privacyy.ch" alt="link to front end">front end</Link> is, as always, built on NextJS and React. The backend, however, is using Python. 
                        On the inside of the case I have fixed a Raspberry Pi running Python code that checks for movement using the motion sensor (gray, round shape on the bottom). 
                        Images are captured quickly after the motion sensor is triggered and, once there's a working connection to my server over a WLAN Hotspot from a phone, uploaded to my server. There are two LEDs that indicate whether the connection is established and images are being uploaded. In case of a server error, one of the LEDs blinks.
                    </p>
                    <p>
                        Images are sent entirely using Python's socket module. It turned out to be an interesting experiment to implement that on a lower level.
                        When the images arrive on the server, an API route adds the image to a MySQL Database using Prisma.
                    </p>

                    <Image width={1280/2} height={960/2} alt="Wildlife Camera front view" src="/WildlifeCamera.jpg"></Image>
                </div>
            </div>
        </>
    )
}