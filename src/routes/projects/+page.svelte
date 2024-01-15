<script lang="ts">
    import GithubProject from "./GithubProject.svelte";
    import { Accordion } from "@skeletonlabs/skeleton";

</script>


<div class="card card-hover projects">
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