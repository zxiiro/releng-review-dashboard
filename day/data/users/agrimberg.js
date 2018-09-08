userdata['agrimberg'] = {
  "identity": ids["agrimberg"],
  "reviewCountPlus2": 5,
  "reviewCountPlus1": 3,
  "reviewCountMinus1": 0,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1536246342000,
  "lastActiveDate": 1536341142000,
  "activeDayCount": 2,
  "commits": [],
  "addedAsReviewerTo": [
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "Ic5f4de1af139e0cf99e955a30e3d957772563f57",
      "commitNumber": 12496,
      "subject": "Use reno 2.10.0 and remove reno.yaml",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12496",
      "commitMessage": "Use reno 2.10.0 and remove reno.yaml\n\nReno 2.10.0 supports our regex pattern so we no longer need to\nconfigure it.\n\nAlso add reno to tox so that people can run it via:\n\n    tox -e reno new slug\n\nChange-Id: Ic5f4de1af139e0cf99e955a30e3d957772563f57\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536340620000,
      "lastUpdatedDate": 1536345719000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["jwagantall"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1536340620000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536340798000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/292/"
        },
        {
          "timestamp": 1536340839000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536340960000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/292/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/292"
        },
        {
          "timestamp": 1536345713000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536345719000,
          "reviewer": ids["jwagantall"],
          "message": "Change has been successfully merged by Jessica Wagantall"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "cbf23405ee4da28adbfd63b323e12e1922c62ffe",
          "parents": [
            "f5988d8e61013b13643575782b8418f31df65a3c"
          ],
          "ref": "refs/changes/96/12496/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536340620000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536340839000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536345713000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536345719000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536340960000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 5,
          "sizeDeletions": -2
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I8ccd3ba8ff02a43db043cfca842645dd1dccd89c",
      "commitNumber": 12497,
      "subject": "Remove prelude",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12497",
      "commitMessage": "Remove prelude\n\nThis prelude did not make much sense for the patch the introduced it.\n\nChange-Id: I8ccd3ba8ff02a43db043cfca842645dd1dccd89c\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536341106000,
      "lastUpdatedDate": 1536345300000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["jwagantall"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1536341106000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536341142000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536341584000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/293/"
        },
        {
          "timestamp": 1536341788000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/293/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/293"
        },
        {
          "timestamp": 1536345153000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536345300000,
          "reviewer": ids["jwagantall"],
          "message": "Change has been successfully merged by Jessica Wagantall"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "de992398836117670b1271f63871755f8cac46a7",
          "parents": [
            "f5988d8e61013b13643575782b8418f31df65a3c"
          ],
          "ref": "refs/changes/97/12497/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536341106000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536341142000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536345153000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536345300000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536341788000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 0,
          "sizeDeletions": -5
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "Ifa5ebace74db851e00fb2431ef06f38952ec3e24",
      "commitNumber": 12393,
      "subject": "Add npm metadata to .gitignore",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12393",
      "commitMessage": "Add npm metadata to .gitignore\n\nChange-Id: Ifa5ebace74db851e00fb2431ef06f38952ec3e24\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535175731000,
      "lastUpdatedDate": 1536247071000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["agrimberg"]
      ],
      "comments": [
        {
          "timestamp": 1535175731000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535175919000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/273/"
        },
        {
          "timestamp": 1535176138000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/273/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/273"
        },
        {
          "timestamp": 1536246365000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2: Patch Set 1 was rebased."
        },
        {
          "timestamp": 1536246588000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/291/"
        },
        {
          "timestamp": 1536246809000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/291/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/291"
        },
        {
          "timestamp": 1536247069000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1536247071000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "2f9e4807bda2006b89323738e150cb33c0a134e6",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/93/12393/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535175731000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535176138000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 4,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "f5988d8e61013b13643575782b8418f31df65a3c",
          "parents": [
            "043bea105c6c12ee26ecc0738edbff4a5ed03c7c"
          ],
          "ref": "refs/changes/93/12393/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536246365000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536247069000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536247071000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536246809000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 4,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I0ff965c2ef24fa7a44a114445d8a97c3176e575a",
      "commitNumber": 12312,
      "subject": "Add sigul signing to maven-stage job",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12312",
      "commitMessage": "Add sigul signing to maven-stage job\n\nChange-Id: I0ff965c2ef24fa7a44a114445d8a97c3176e575a\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534558526000,
      "lastUpdatedDate": 1536362251000,
      "isOpen": true,
      "status": "DRAFT",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"]
      ],
      "comments": [
        {
          "timestamp": 1534558526000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534558567000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review-1\n\nI just realized that lf-sigul-install only supports CentOS. Can sigul run on other distros?"
        },
        {
          "timestamp": 1534558636000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1534559558000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review-1\n\nHitting this issue:\n\n22:31:47 ---\u003e sigul-configuration.sh\n22:31:47 gpg: CAST5 encrypted data\n22:31:47 gpg: encrypted with 1 passphrase\n22:31:47 gpg: handle plaintext failed: General error\n22:31:47 gpg: WARNING: message was not integrity protected\n22:31:47 Build step \u0027Execute shell\u0027 marked build as failure"
        },
        {
          "timestamp": 1534876103000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 2:\n\n\u003e I just realized that lf-sigul-install only supports CentOS. Can\n \u003e sigul run on other distros?\n\nSigul itself is a python app. So, it should be able to. Though I don\u0027t know if it\u0027s available in PyPi or not."
        },
        {
          "timestamp": 1535407868000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1536361430000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4: Patch Set 3 was rebased."
        },
        {
          "timestamp": 1536362139000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1536362182000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4:\n\nI wonder if we should actually make sigul optional. Although with all those \"builder\" steps they are basically forced to setup sigul anyway. Not sure if there\u0027s a clean way to get the system setup."
        },
        {
          "timestamp": 1536362251000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 5:\n\n\u003e I wonder if we should actually make sigul optional. Although with\n \u003e all those \"builder\" steps they are basically forced to setup sigul\n \u003e anyway. Not sure if there\u0027s a clean way to get the system setup.\n\nI would like to make it optional, but I don\u0027t know how unless we do separate templates that do and don\u0027t have it."
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "5f0b4422ded20940dcce964260eeb45cfbffdea3",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/12/12312/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534558526000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1534558567000,
              "grantedBy": ids["zxiiro"]
            }
          ],
          "comments": [],
          "sizeInsertions": 6,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "3fad4e1c83d21a4a16038db8101a0fc8207ab221",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/12/12312/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534558636000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1534559558000,
              "grantedBy": ids["zxiiro"]
            }
          ],
          "comments": [],
          "sizeInsertions": 6,
          "sizeDeletions": -1
        },
        {
          "number": 3,
          "revision": "ecb928a5d08b69739e71c41f5091a28c47bb6b6e",
          "parents": [
            "73c1e4ad26a06e40fee8e08aad09ed3831b4cdf6"
          ],
          "ref": "refs/changes/12/12312/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535407868000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 5,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "aeddc05604e3c741e656f1c9b3ca84462879161f",
          "parents": [
            "baacf438b7128ac60b458398219467235fcef9b1"
          ],
          "ref": "refs/changes/12/12312/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536361430000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "TRIVIAL_REBASE",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 5,
          "sizeDeletions": 0
        },
        {
          "number": 5,
          "revision": "64c92383808217a01eb46103aedf50a3dd79d42e",
          "parents": [
            "baacf438b7128ac60b458398219467235fcef9b1"
          ],
          "ref": "refs/changes/12/12312/5",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536362139000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 9,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I945735ecd50596605139c6522903a49350a1ea10",
      "commitNumber": 12395,
      "subject": "Refactor job-groups documentation",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12395",
      "commitMessage": "Refactor job-groups documentation\n\nImprove the way job-groups are documented so that it stays properly\nin sync. This update recommends projects define their own job-groups\nand using the ones defined in global-jjb only as a starting point.\n\nUpdate ensure-documented to ignore job-groups since they should be\nself documenting now in the new format.\n\nChange-Id: I945735ecd50596605139c6522903a49350a1ea10\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535210745000,
      "lastUpdatedDate": 1536246492000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["agrimberg"],
        ids["zxiiro"]
      ],
      "comments": [
        {
          "timestamp": 1535210745000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535210853000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/309/ (1/2)"
        },
        {
          "timestamp": 1535210881000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/739/ (2/2)"
        },
        {
          "timestamp": 1535211048000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/739/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/739/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/739\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/309/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/309"
        },
        {
          "timestamp": 1535211122000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1535211227000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/310/ (1/2)"
        },
        {
          "timestamp": 1535211266000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/740/ (2/2)"
        },
        {
          "timestamp": 1535211433000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/310/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/310\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/740/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/740"
        },
        {
          "timestamp": 1536245622000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+1"
        },
        {
          "timestamp": 1536246490000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1536246492000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "c29cee3c20a8fcdd2fb439839a08a7a374ec1741",
          "parents": [
            "e96029d01d65803befad00623129086262c3ccb3"
          ],
          "ref": "refs/changes/95/12395/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535210745000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535211048000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 199,
          "sizeDeletions": -288
        },
        {
          "number": 2,
          "revision": "f4e0e413849367f8f71bc4cb9098e282c0ac206e",
          "parents": [
            "e96029d01d65803befad00623129086262c3ccb3"
          ],
          "ref": "refs/changes/95/12395/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535211122000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536246490000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536246492000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1536245622000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535211433000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 199,
          "sizeDeletions": -288
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Iddc98ccc4d4f8f3bfc3650eec3b5bab7f156db3b",
      "commitNumber": 12394,
      "subject": "Remove maven-merge job todo",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12394",
      "commitMessage": "Remove maven-merge job todo\n\nThis is completed.\n\nChange-Id: Iddc98ccc4d4f8f3bfc3650eec3b5bab7f156db3b\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535210745000,
      "lastUpdatedDate": 1536246345000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1535210745000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535210875000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/738/"
        },
        {
          "timestamp": 1535211053000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/738/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/738"
        },
        {
          "timestamp": 1536245626000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1536246342000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536246345000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "e96029d01d65803befad00623129086262c3ccb3",
          "parents": [
            "73c1e4ad26a06e40fee8e08aad09ed3831b4cdf6"
          ],
          "ref": "refs/changes/94/12394/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535210745000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536246342000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536246345000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1536245626000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535211053000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 0,
          "sizeDeletions": -2
        }
      ]
    }
  ],
  "reviewRequestors": [
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 6,
        "approvalCount": 8,
        "commentCount": 0,
        "approvals": {
          "1": 3,
          "2": 5
        }
      }
    }
  ],
  "commentsWritten": [],
  "commentsReceived": [],
  "reviewersForOwnCommits": [],
  "repositories": {},
  "averageTimeInCodeReview": 0,
  "abandonedCommitCount": 0,
  "projects": [],
  "selfReviewedCommitCount": 0,
  "inReviewCommitCount": 0
};