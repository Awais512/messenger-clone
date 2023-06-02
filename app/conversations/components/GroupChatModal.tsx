"use client";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface GroupChatModalProps {
  isOpen?: boolean;
  onClose: () => void;
  users: User[];
}

const GroupChatModal: React.FC<GroupChatModalProps> = ({
  isOpen,
  onClose,
  users,
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {} = useForm<FieldValues>({});

  return <div>GroupChatModal</div>;
};

export default GroupChatModal;
