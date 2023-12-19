"use client";
import * as z from "zod"
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { 
    Form,
    FormField,
    FormControl,
    FormDescription,
    FormLabel,
    FormMessage
 } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CreatePage = () => {
  return <div>Create Page</div>;
};

export default CreatePage;
