import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import styles from "./modal.module.scss";
import Link from "next/link";

export function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
          className={styles.contactButton}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/message.svg" alt="Contact" />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className={styles.modal}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/contactmail.svg" alt="Email Us" />
                  <Dialog.Title as="h3" className={styles.title}>
                    Contact Us Via Email
                  </Dialog.Title>
                  <div>
                    <p className={styles.description}>
                      Any questions? Send us an email at prolog@profy.dev. We
                      usually answer within 24 hours.
                    </p>
                  </div>

                  <div id="modalButtons" className={styles.buttons}>
                    <button onClick={closeModal}>Cancel</button>
                    <Link href="mailto:prolog@profy.dev?">Open Email App</Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
