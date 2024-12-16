import React, { useState } from "react";
import Input from "../Components/Elements/Input/Index";
import RadioButton from "../Components/Elements/RadioButton/RadioButton";

const EditMentor = ({ updateMentors }) => {
    const [formData, setFormData] = useState({
        name: "",
        job: "",
        date: "",
        time: "",
        zoomLink: "",
        classType: "", // Menambahkan classType
    });

    const RadioButtonOpts = [
        { label: "Review CV", value: "Review CV" },
        { label: "Review Portfolio", value: "Review Portfolio" },
        { label: "Latihan Interview", value: "Latihan Interview" },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleRadioChange = (value) => {
        setFormData((prevFormData) => ({ ...prevFormData, classType: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Log formData untuk memastikan nilai yang dikirim
        console.log(formData);

        const isFormValid = Object.values(formData).every((value) => value.trim() !== "");
        if (!isFormValid) {
            alert("All fields are required!");
            return;
        }

        fetch("http://localhost:5000/mentors", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    return response.text().then((message) => {
                        throw new Error(message);
                    });
                }
                return response.json();
            })
            .then((newMentor) => {
                updateMentors((prevMentors) => [...prevMentors, newMentor]);
                setFormData({
                    name: "",
                    job: "",
                    date: "",
                    time: "",
                    zoomLink: "",
                    classType: "",
                });
                alert("Mentor data saved!");
            })
            .catch((error) => {
                console.error("Error saving mentor data:", error);
                alert("Error saving mentor: " + error.message);
            });
    };

    return (
        <div className="w-full h-auto rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="self-stretch p-5 bg-[#d2d2d2] rounded-[20px] justify-start items-start gap-4 inline-flex">
                <form
                    className="grow shrink basis-0 flex-col justify-start items-start gap-[10px] inline-flex"
                    onSubmit={handleSubmit}
                >
                    <div className="self-stretch justify-start items-center gap-[37px] inline-flex">
                        <img
                            className="w-[146px] h-[146px] rounded-[10px]"
                            src="/public/assetsvivit/5d9783cb0a04030c4556d7079ddf57af.png"
                            alt="Mentor"
                        />
                        <div className="grow shrink basis-0 flex-col justify-center items-start gap-3 inline-flex">
                            <Input
                                title="Nama Lengkap"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Tiara Dewi"
                                type="text"
                                classname2="w-full h-[42px] px-5 py-2.5 bg-white rounded-[5px]"
                            />
                            <Input
                                title="Pekerjaan"
                                name="job"
                                value={formData.job}
                                onChange={handleChange}
                                placeholder="CV Consultant"
                                type="text"
                                classname2="w-full h-[42px] px-5 py-2.5 bg-white rounded-[5px]"
                            />
                            <RadioButton
                                options={RadioButtonOpts}
                                value={formData.classType}
                                onChange={handleRadioChange}
                            />
                        </div>
                    </div>
                    <div className="self-stretch justify-start items-center gap-[37px] inline-flex">
                        <Input
                            title="Tambahkan Tanggal"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            type="date"
                            classname2="w-full h-[42px] px-5 py-2.5 bg-white rounded-[5px]"
                        />
                        <Input
                            title="Tambahkan Waktu"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            type="time"
                            classname2="w-full h-[42px] px-5 py-2.5 bg-white rounded-[5px]"
                        />
                        <Input
                            title="Link Zoom"
                            name="zoomLink"
                            value={formData.zoomLink}
                            onChange={handleChange}
                            placeholder="https://zoom.us/j/1234567890"
                            type="url"
                            classname2="w-full h-[42px] px-5 py-2.5 bg-white rounded-[5px]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                    >
                        Simpan
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditMentor;
