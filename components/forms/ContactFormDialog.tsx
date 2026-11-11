"use client";

import { ContactFormCard } from "@/components/forms/ContactFormEmailJS";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ContactFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ContactFormDialog({ open, onOpenChange }: ContactFormDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] gap-0 overflow-y-auto rounded-2xl p-0 sm:max-w-2xl">
        <DialogHeader className="sr-only">
          <DialogTitle>Solicitar análise do projeto</DialogTitle>
          <DialogDescription>
            Preencha o formulário de contato e nossa equipe retorna com uma
            recomendação técnica.
          </DialogDescription>
        </DialogHeader>
        <ContactFormCard
          heading="Solicitar análise do projeto"
          description="Descreva sua operação e nossa equipe retorna com uma recomendação de arquitetura, integrações e indicadores."
        />
      </DialogContent>
    </Dialog>
  );
}
