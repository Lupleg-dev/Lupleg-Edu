import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
    const { userId } = auth();

    if (!userId) {
        return redirect("/");
    }

    const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
  });

    if (!course) {
        return redirect("/");
    }

    

  return (
    <div>
      <h1>Course Id: {params.courseId} </h1>
    </div>
  );
};

export default CourseIdPage;
