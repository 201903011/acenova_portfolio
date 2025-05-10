import {
    Button,
    Checkbox,
    Label,
    Select,
    TextInput,
    Textarea,
} from "flowbite-react";
import type { FC } from "react";
import { countries, languages } from "../../data/options_data";

const ContactFormSection: FC = function () {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto mt-8 max-w-3xl lg:mt-14 px-4 lg:px-6">
                <form
                    action="#"
                    className="mx-auto grid max-w-screen-md grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
                >
                    <div className="grid grid-cols-1 gap-2">
                        <Label htmlFor="first-name" className="dark:text-white">First name</Label>
                        <TextInput id="first-name" placeholder="John" required />
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <Label htmlFor="last-name" className="dark:text-white">Last name</Label>
                        <TextInput id="last-name" placeholder="Doe" required />
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <Label htmlFor="email" className="dark:text-white">Your email</Label>
                        <TextInput
                            id="email"
                            placeholder="name@flowbite.com"
                            required
                            type="email"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <Label htmlFor="phone-number" className="dark:text-white">Phone number</Label>
                        <TextInput
                            id="phone-number"
                            placeholder="+(12) 345 6789"
                            required
                            type="number"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <Label htmlFor="country" className="flex items-center gap-1 dark:text-white">
                            Country
                        </Label>
                        <Select id="country">
                            <option>Select a country</option>
                            {countries.map((country) => (
                                <option key={country.code} value={country.code}>
                                    {country.name}
                                </option>
                            ))}
                        </Select>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 gap-2">
                            <Label htmlFor="language" className="flex items-center gap-1 dark:text-white">
                                Language
                            </Label>
                            <Select id="language">
                                <option>Select a language</option>
                                {languages.map((language) => (
                                    <option key={language.code} value={language.code}>
                                        {language.name}
                                    </option>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2 sm:col-span-2">
                        <Label htmlFor="message" className="dark:text-white text-sm">Your message</Label>
                        <Textarea id="message" placeholder="" rows={6} />
                    </div>
                    <div className="sm:col-span-2">
                        <div className="flex items-center gap-3">
                            <Checkbox id="terms" value="" />
                            <Label
                                htmlFor="terms"
                                className="text-gray-500 dark:text-gray-300"
                            >
                                I confirm that you have read and agreed to share number and other information with me.
                            </Label>
                        </div>
                    </div>
                    <div>
                        <Button type="submit">Send message</Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactFormSection;
