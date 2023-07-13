import {DISCORD_INVITE_URL} from "../../utils/urlContants";
import {BsDiscord} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import React from "react";

const ContactInformation = () => {
    return (
        <div
            style={{boxShadow: 'inset 0 10px 10px -10px rgba(0, 0, 0, 0.5)'}}
            className="w-full p-4 text-center sm:p-8 bg-gray-800 border-gray-700">
            <h5 className="mb-2 text-3xl font-bold text-white">Let&apos;s Chat!</h5>
            <p className="mb-5 text-base sm:text-lg text-gray-400">
                We&apos;d love to hear from you! The quickest way to reach us is by joining our Discord server and dropping
                us a message. But, if you&apos;d rather, feel free to shoot us an email.
            </p>
            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <a href={DISCORD_INVITE_URL}
                   className="w-full sm:w-auto focus:ring-4 focus:outline-none  text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 bg-gray-700 hover:bg-gray-600 focus:ring-gray-700">
                    <BsDiscord className="mr-3 w-7 h-7"/>
                    <div className="text-left">
                        <div className="mb-1 text-xs">Join our</div>
                        <div className="-mt-1 font-sans text-sm font-semibold">Discord Server</div>
                    </div>
                </a>
                <a href="mailto:info@unitystation.org"
                   className="w-full sm:w-auto focus:ring-4 focus:outline-none  text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 bg-gray-700 hover:bg-gray-600 focus:ring-gray-700">
                    <MdEmail className="mr-3 w-7 h-7"/>
                    <div className="text-left">
                        <div className="mb-1 text-xs">Email us at</div>
                        <div className="-mt-1 font-sans text-sm font-semibold">info@unitystation.org</div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ContactInformation;