<script lang="ts">
    import GithubProject from "./GithubProject.svelte";
    import { Accordion } from "@skeletonlabs/skeleton";

</script>


<div class="card card-hover projects variant-glass-secondary">
    <Accordion>
        <GithubProject 
            header="amcelroy.github.io" >
            <p>
                <a href="https://github.com/amcelroy/amcelroy.github.io" style="color: lightgreen;">https://github.com/amcelroy/amcelroy.github.io</a>
            </p>

            <p>This website. I picked up http://austin.engineer and had a generic Google Site hosted there for a while. \
            This wasn't very unique or customizable, so I went with hosting a site on GitHub pages. I also really wanted to use Svelte,
            as that is what I use at work for GUI front ends when using Tauri. Skeleton UI looks really cool and had a nice starter
            project that uses Vite + SvelteKit which made a natural choice for the project. Iconify is used to handle icons, and TuiCss
            forms the graphics package for RaptorOS. </p>
            
            <p>
            RaptorOS is a small work in progress program that has retro stylings that will host engineering tools that I typically use.
            The first "app" in RaptorOS will be simple bit manipulation tools that I use when writing firmware. Currently, it can spawn 
            "Applications" which are windows that can be moved around and closed. 
            </p>
        </GithubProject>
        <GithubProject 
            header="FLEM Protocol - Flexible, Lightweight, Embedded Messaging Protocol" >
            <p>
                <a href="https://github.com/BridgeSource/flem-rs" style="color: lightgreen;">https://github.com/BridgeSource/flem-rs</a>
            </p>

            <p>
                <a href="https://crates.io/crates/flem" style="color: lightgreen;">crates.io</a>
            </p>

            <p>
                Our company uses microcontrollers, a lot. Almost every project involves using a microcontroller to do a particular task 
                and communicate the results elsewhere. What we lacked was a coherent messaging protocol that could be used over and over.
                I had come up with a C version of FLEM in grad school for an IoT class and used it in some of the early projects at BridgeSource.
                FLEM is designed to be hardware agnostic, so it can be used on any bus, and has been used with UART, I2C, and BLE hardware protocols.  
            </p>

            <p>
                FLEM also offers Rust traits, which can be used to massage Rust structs into FLEM packets. This makes it easy to transmit data using
                structs and keep the protocol consistent on the host and MCU.
            </p>

            <p>
                I set a work goal in 2023 to learn Rust and open source a project, so rewriting FLEM in Rust seemed natural, since we were 
                moving all of our firmware over to Rust. There are lots of examples and units tests, so I hope it can help others. We currently use
                FLEM to stream data to our desktop GUIs (written in Tauri) as well as inter-MCU communications. 
            </p>
        </GithubProject>
        <GithubProject 
            header="FLEM Serial Rust" >
            <p>
                <a href="https://github.com/BridgeSource/flem-serial-rs" style="color: lightgreen;">https://github.com/BridgeSource/flem-serial-rs</a>
            </p>

            <p>
                <a href="https://crates.io/crates/flem-serial-rs" style="color: lightgreen;">crates.io</a>
            </p>

            <p>
                This library is meant to pair with a microcontroller running FLEM. It uses the awesome Rust `serialport` library to simply
                using FLEM on a host device such as a PC. It uses multiple threads to asynchronously read and write to the serial port, and offers
                and easy to use thread safe multi-producer, single consumer queue that can be monitored for checksum validated FLEM packets.
                Writing FLEM packets is also easy to do in a multi-threaded environment using clones of write queue handle. 
            </p>
        </GithubProject>
        <GithubProject 
            header="Bitterly - Human readable peripheral registers for Rust" >
            <p>
                <a href="https://github.com/BridgeSource/bitterly" style="color: lightgreen;">https://github.com/BridgeSource/bitterly</a>
            </p>

            <p>
                I haven't released this one officially yet, I'm still testing it out internally. A lot of my work is in embedded systems which
                requires communicating with perhipherals that the microcontroller might not have. A common peripheral bus type is I2C, which 
                is a 2 wire bus protocol that uses a data and clock line and can be shared amonst multiple devices. 
                The ICs that use this bus typically have a 7 bit address to locate the device on the bus, and values of the IC stored in a 
                series of registers. A device may have a few dozen registers denoted by the register address (usually 1 or 2 bytes), 
                and the values may be 1 byte or several bytes. Register values be used to denote a measurement, configuration parameter,
                or individual bits that are used as flags. 

                So, we need <i>a priori</i> knowledge of the address of the device, the address of the register, and the values(s) of the register. Not 
                so bad, until you stare at the datasheet trying to remember if you need to work with register 0xA or 0xA1, and should I set bit 3 to enable
                that flag. Dang, I forgot.

                Bitterly is meant to take the <i>a priori</i> knowledge of the device address, register addresses, and register values and make human 
                readable names for them. The perhiperpheral registers are cached on the MCU and interacted with using the human readable names instead of
                numeric addresses, bitfields, and values. Registers with bitmasks will now have human readable bitfields to set. Registers that are split
                or have fixed point values can also be interacted with using human readable getters and setters.

                I've used it to implement registers for the max14748 and Max17261, ICs used for USB-C charging and computing the battery life of
                single or multi-cell Lithium Ion batteries. It has been a huge time saver once the initial setup is complete, and the initial setup can be 
                dramatically sped up using a PDF to Text tool for the datasheet and instructing ChatGPT, Claude, or another LLM to massage the datasheet
                into the Bitterly format. The workflow of this last part is still a work in progress and the main reason I haven't released the tool yet.
            </p>
        </GithubProject>
        <GithubProject 
            header="OpenCLV - OpenCL for Labview" >
            <p>
                <a href="https://github.com/amcelroy/OpenCLV" style="color: lightgreen;">https://github.com/amcelroy/OpenCLV</a>
            </p>

            <p>
                In a prior life, I did a LOT of image and signal processing for Optical Coherence Tomography (OCT) and it needed to be done fast.
                Swept source OCT, where the laser sweeps over a range of wavelengths over time, requires a Fourier Transform on the interfered data
                to map the fringe frequency to depth and represents an A-Scan, the depth of a single location. A B-Scan is constructed of A-Scans, and 
                represents a 2D image or slice of a sample, like a typical ultrasound image. A series of B-Scans is a C-Scan an is a volume. 

                An A-Scan depends on many things, but on the electronics side it depends on the sampling rate of the ADC and the sweep time of the laser. A 
                modern swept source laser may operate at 200kHz with a 2,048 points per more per sweep, requiring an FFT to be performed on the order of 
                microseconds. 

                One of my first patents (<a href="https://patents.google.com/patent/US9347765B2/en?oq=US9347765B2" style="color: lightgreen;">Patent 9,3477,652</a>)
                was collaborating with Dr. Milner and Dr. Kemp on a GPU based system for OCT image processing back in the early 2000's, using a newly released, alpha 
                and beta versions of NVIDIA CUDA, a now ubiquitous GPU programming language. OpenCL came out a few years later and worked on both AMD and NVIDIA cards,
                as well as CPUs. The primary language we used in Dr. Milner's lab was Labview, as we got it for free through a collaboration with National Instruments
                and the University of Texas and the grad students could pick it up even if they weren't programmers. 

                I decided to try and commercialize a plugin for Labview that would allow people to use OpenCL easily, and spun up my consulting company, Raptorview,
                to do it. Well, I got exactly 0 customers, but it was a fun project and a lesson in market research; I eventually Open Sourced it after a while.
            </p>
        </GithubProject>
    </Accordion>
</div>



<style>
    .projects {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: left;
        align-items: center;
        margin: 16px;
        max-width: 95%;
        min-width: 128px;
    }
</style> 