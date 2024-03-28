import { useState } from "react";
import { Dialog } from "@headlessui/react";

export function Modal() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Panel>
        <Dialog.Title>Contact Us Via Email</Dialog.Title>

        <p>
          Any questions? Send us an email at prolog@profy.dev. We usually answer
          within 24 hours.
        </p>

        <button onClick={() => setIsOpen(false)}>Cancel</button>
        <button onClick={() => setIsOpen(false)}>Open Email App</button>
      </Dialog.Panel>
    </Dialog>
  );
}
