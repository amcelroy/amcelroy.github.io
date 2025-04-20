<script lang="ts">
    import GithubProject from "./GithubProject.svelte";
    import { Accordion } from "@skeletonlabs/skeleton";
    import PatentProject from "./PatentProject.svelte";
    import MathJax from "./MathJax.svelte";
    import Project from "./Project.svelte";

    let wavenumber = `$$k = \\frac{2 \\pi}{\\lambda}$$`;

</script>

<div class="card card-hover projects variant-glass-secondary">
    <Accordion>
        <GithubProject 
            header="amcelroy.github.io" >
            <p>
                <a href="https://github.com/amcelroy/amcelroy.github.io" style="color: lightgreen;" target="_blank">https://github.com/amcelroy/amcelroy.github.io</a>
            </p>

            <p>
                This website. I picked up http://austin.engineer and had a generic Google Site hosted there for a while. 
                This wasn't very unique or customizable, so I went with hosting a site on GitHub pages. I also really wanted to use Svelte,
                as that is what I used at work for GUI front ends when using Tauri and some other web projects. Skeleton UI looks really cool and had a nice starter
                project that uses Vite + SvelteKit which made a natural choice for the project. Iconify is used to handle icons, and TuiCss
                forms the graphics package for RaptorOS. 
            </p>
            
            <p>
                RaptorOS is a small work in progress program that has retro stylings that will host engineering tools that I typically use.
                The first "app" in RaptorOS will be simple bit manipulation tools that I use when writing firmware. Currently, it can spawn 
                "Applications" which are windows that can be moved around and closed. 
            </p>
        </GithubProject >
        <PatentProject header="US 12,213,810 - Systems and methods for automated coronary plaque characterization and risk assessment using intravascular optical coherence tomography">
            <a href="https://patentimages.storage.googleapis.com/6f/52/86/df09f5f2dfa6da/US12213810.pdf" style="color: lightgreen;" target="_blank">Patent</a>
        </PatentProject>
        <PatentProject header="US 11,779,220 - Multi-channel orthogonal convolutional neural networks">
            <a href="https://patentimages.storage.googleapis.com/29/8d/54/7ee6cca9c2919f/US11779220.pdf" style="color: lightgreen;" target="_blank">Patent</a>
        </PatentProject>
        <GithubProject 
            header="FLEM Protocol - Flexible, Lightweight, Embedded Messaging Protocol" >
            <p>
                <a href="https://github.com/BridgeSource/flem-rs" style="color: lightgreen;" target="_blank">https://github.com/amcelroy/flem-rs</a>
            </p>

            <p>
                <a href="https://crates.io/crates/flem" style="color: lightgreen;" target="_blank">crates.io</a>
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
                <a href="https://github.com/BridgeSource/flem-serial-rs" style="color: lightgreen;" target="_blank">https://github.com/amcelroy/flem-serial-rs</a>
            </p>

            <p>
                <a href="https://crates.io/crates/flem-serial-rs" style="color: lightgreen;" target="_blank">crates.io</a>
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
                <a href="https://github.com/BridgeSource/bitterly" style="color: lightgreen;" target="_blank">https://github.com/amcelroy/bitterly</a>
            </p>

            <p>
                I haven't released this one officially yet, I'm still testing it out internally. A lot of my work is in embedded systems which
                requires communicating with perhipherals that the microcontroller might not have. A common peripheral bus type is I2C, which 
                is a 2 wire bus protocol that uses a data and clock line and can be shared amonst multiple devices. 
                The ICs that use this bus typically have a 7 bit address to locate the device on the bus, and values of the IC stored in a 
                series of registers. A device may have a few dozen registers denoted by the register address (usually 1 or 2 bytes), 
                and the values may be 1 byte or several bytes. Register values be used to denote a measurement, configuration parameter,
                or individual bits that are used as flags. 
            </p>
            <p>
                So, we need <i>a priori</i> knowledge of the address of the device, the address of the register, and the values(s) of the register. Not 
                so bad, until you stare at the datasheet trying to remember if you need to work with register 0xA or 0xA1, and should I set bit 3 to enable
                that flag. Dang, I forgot.
            </p>
            <p>
                Bitterly is meant to take the <i>a priori</i> knowledge of the device address, register addresses, and register values and make human 
                readable names for them. The perhiperpheral registers are cached on the MCU and interacted with using the human readable names instead of
                numeric addresses, bitfields, and values. Registers with bitmasks will now have human readable bitfields to set. Registers that are split
                or have fixed point values can also be interacted with using human readable getters and setters.
            </p>
            <p>
                I've used it to implement registers for the max14748 and Max17261, ICs used for USB-C charging and computing the battery life of
                single or multi-cell Lithium Ion batteries. It has been a huge time saver once the initial setup is complete, and the initial setup can be 
                dramatically sped up using a PDF to Text tool for the datasheet and instructing ChatGPT, Claude, or another LLM to massage the datasheet
                into the Bitterly format. The workflow of this last part is still a work in progress and the main reason I haven't released the tool yet.
            </p>
        </GithubProject>
        <GithubProject 
            header="OpenCLV - OpenCL for Labview" >
            <p>
                <a href="https://github.com/amcelroy/OpenCLV" style="color: lightgreen;" target="_blank">https://github.com/amcelroy/OpenCLV</a>
            </p>

            <p>
                In a prior life, I did a LOT of image and signal processing for Optical Coherence Tomography (OCT) and it needed to be done fast.
                Swept source OCT, where the laser sweeps over a range of wavelengths over time, requires a Fourier Transform on the interfered data
                to map the fringe frequency to depth and represents an A-Scan, the depth of a single location. A B-Scan is constructed of A-Scans, and 
                represents a 2D image or slice of a sample, like a typical ultrasound image. A series of B-Scans is a C-Scan an is a volume. 
            </p>
            <p>
                An A-Scan depends on many things, but on the electronics side it depends on the sampling rate of the ADC and the sweep time of the laser. A 
                modern swept source laser may operate at 200kHz with a 2,048 points per more per sweep, requiring an FFT to be performed on the order of 
                microseconds. 
            </p>
            <p>
                One of my first patents (<a href="https://patents.google.com/patent/US9347765B2/en?oq=US9347765B2" style="color: lightgreen;" target="_blank">Patent 9,3477,652</a>)
                was collaborating with Dr. Milner and Dr. Kemp on a GPU based system for OCT image processing back in the early 2000's, using a newly released, alpha 
                and beta versions of NVIDIA CUDA, a now ubiquitous GPU programming language. OpenCL came out a few years later and worked on both AMD and NVIDIA cards,
                as well as CPUs. The primary language we used in Dr. Milner's lab was Labview, as we got it for free through a collaboration with National Instruments
                and the University of Texas and the grad students could pick it up even if they weren't programmers. 
            </p>
            <p>
                I decided to try and commercialize a plugin for Labview that would allow people to use OpenCL easily, and spun up my consulting company, Raptorview,
                to do it. Well, I got exactly 0 customers, but it was a fun project and a lesson in market research; I eventually Open Sourced it after a while.
            </p>
        </GithubProject>
        <PatentProject header="US 8,593,641 - Apparatus and methods for uniform frequency sample clocking">

            <a href="https://patentimages.storage.googleapis.com/12/eb/3b/0aaf062dc01098/US8593641.pdf" style="color: lightgreen;" target="_blank">Patent</a>
    

            <p>
                My first two patents were at CardioSpectra, a small startup out of the University of Texas, Austin started by Dr. Thomas Milner and Dr. Marc Feldmna, with Dr. Nate Kemp
                as the technical lead. I had just left Applied Materials in 2006 and was going to go back to UT - Austin for a PhD in BME and landed up in Dr. Milner's lab. CardioSpectra
                had just been formed and needed help with electronics, signal acquisition, and processing. I decided to join as a full time engineer since all of the things they needed help
                with I wanted to learn.
            </p>

            <p>
                This particular patent and implementation was to solve a problem that required substantial software resources to resample a signal. An A-Scan is the result of a laser that is 
                swept over a range of wavelengths that is linear in time, but non-linear in k-space:
            </p>
            <body>
                <MathJax math="{wavenumber}"></MathJax>
            </body>
            <p>
                When the data is acquired in linear time, it needs to be re-interpolated. The indecies of the re-interpolation are typically generated from a mirror at some depth which causes
                a frequency modulated sinusoid; the zero crossings of the sinusoid are the interpolation indecies. These indecies would need to be acquired at the start of an experiement and usually
                were tied to the medium being imaged, which wasn't a mirror, and could drift over time.
            </p>

            <p>
                The solution we came up with was to generate a non-linear clock that could be used as a sample clock for an ADC. Most ADCs require linear sampling, so we had to track down a high speed ADC that
                that was suitable, as well as an analog to digital circuit that could generate digtal zero-crossings from the analog optical interference signal. My contribution was to build out photodetectors
                and comparitors that could run at 80+ MHz and were clean enough to generate a signal the ADC could use as a clock. This required a lot of signal processing and hardware filtering, but it worked,
                and worked well! Using this hardware approach greatly simplifies and enhances the SNR of the A-Scan acquistion and processing leading better images and real-time processing.
            </p>
        </PatentProject>
        <PatentProject header="US 9,347,765 - Real time SD-OCT with distributed acquisition and processing">
            <p>
                <a href="https://patentimages.storage.googleapis.com/c3/bc/73/013b41d9bf5925/US9347765.pdf" style="color: lightgreen;" target="_blank">Patent</a>
            </p>

            <p>
                Taking a swept source (frequency domain) A-Scan and converting it to a depth (time domain) A-Scan requires a Fourier Transform. The fourier transform maps optical frequency to depth and 
                and a key step to generating frequency domain OCT B-Scans. Depending on the clock, hundreds to thousands of points may be contained in the A-Scan, with tens to hundreds of thousands of
                A-Scans per second. Since our early work was research, we couldn't compress or throw data away, since it was unclear what data would be useful, so we needed to go from U16 ADC data to 
                F32 Real and Imaginary data, compute the magnitude of the complex data, and use logs to scale the data for display. 
            </p>

            <p>
                CUDA had just been released by NVIDIA as an Alpha library that allowed general computation on a GPU, something that is ubiquitous these days. We realized that we could offload the A-Scans to 
                GPU and perform the A-Scan image processing pipeline without the CPU. This was in the days of dual core computers, so freeing up a processor was a pretty big deal. My contribution was to write the 
                C library that was consumed raw A-Scans and generated processed A-Scans. This combined with the elimination of re-sampling the A-Scan was a pretty big step forward in the processing of OCT 
                images in real time, and I'm really proud to have contributed to furthering the field.
            </p>

            <p>
                This work inspired me to write the Labview OpenCL library, as I saw OpenCL as a better approach to CPU/GPU scientific computing. You can read how that project ended up above, but I went on
                to write several algorithms at UT in OpenCL: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3055590/">Speckle Processing</a>, 
                <a href="https://pubmed.ncbi.nlm.nih.gov/35589781/">Blood Flow Detection</a>, and Polarization linear fit algorithm on a stack of 7 images. 
            </p>
        </PatentProject>
        <Project header="ABBU - Automated Bridge Breathing Unit">
            <p>
                I finished up a M.S.E.E at UT during the COVID pandemic. My masters thesis was part of a team; I designed the circuit 
                board and firmware for a low-cost bridge 
                ventilator unit. The team was lead by Dr. Thomas Milner and Dr. Johnathan Valvano and couldn't have been completed without
                the help of a lot of other people. 
            </p>
            <p>
                Though we moved fast, the vaccine came out as we were submitting the device to the FDA under the emergancy authorization
                act and it was deemed not needed. Regardless, it was an amazing experience that made us feel empowered during a time of a 
                lot of uncertainty.
            </p>
            <p style="color: lightgreen;">
                <a href="https://news.utexas.edu/2020/04/01/solving-the-ventilator-shortage-with-windshield-wiper-parts/">ABBU Press Release</a>
            </p>
        </Project>
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