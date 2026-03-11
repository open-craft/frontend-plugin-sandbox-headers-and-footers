import React from "react";
import { Stack } from "@openedx/paragon";
import bannerBg from "../assets/banner-bg.png";

export const CatalogBanner = () => (
    <Stack
        direction="horizontal"
        className="bg-primary"
    >
        <Stack
            direct="vertical"
            className="justify-content-center pl-6"
            style={{ maxWidth: "55rem" }}
        >
            <h1 className="display-2 text-light-100">
                You’re viewing a live
                <span className="text-brand-500">
                    {" Open edX® "}
                </span>
                demo
            </h1>
            <p className="h4 text-light-100 ">
                OpenClass is a demo site by OpenCraft where you can explore the
                Open edX platform as a learner or course author.
            </p>
        </Stack>
        <Stack className="justify-content-end">
            <img
                src={bannerBg}
                alt="illustration of a workspace with a computer screen displaying charts and graphs, accompanied by a desk lamp, coffee cup, and potted plant"
            />
        </Stack>
    </Stack>
);
