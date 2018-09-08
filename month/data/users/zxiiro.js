userdata['zxiiro'] = {
  "identity": ids["zxiiro"],
  "reviewCountPlus2": 5,
  "reviewCountPlus1": 5,
  "reviewCountMinus1": 8,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1523479918000,
  "lastActiveDate": 1536366483000,
  "activeDayCount": 27,
  "commits": [
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I7a75f944030e35d4b021709700084abf11b6ae00",
      "commitNumber": 12505,
      "subject": "Enable universal wheel",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12505",
      "commitMessage": "Enable universal wheel\n\nlftools is Python 2 and 3 compatible so enable universal wheels.\n\nChange-Id: I7a75f944030e35d4b021709700084abf11b6ae00\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536362694000,
      "lastUpdatedDate": 1536363143000,
      "isOpen": true,
      "status": "NEW",
      "reviewers": [
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1536362694000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536362962000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/300/"
        },
        {
          "timestamp": 1536363143000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/300/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/300"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "c18664985fc54650f699c347935981838b0d8f46",
          "parents": [
            "ea7f2b8aaab8224860e82504109d4357eba00ec2"
          ],
          "ref": "refs/changes/05/12505/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536362694000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536363143000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 3,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I58dc200f7b29429ee1215bacdc533d234ad153fb",
      "commitNumber": 12483,
      "subject": "Add cmd to share openstack images",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12483",
      "commitMessage": "Add cmd to share openstack images\n\nAllows us to more easily share images to multiple openstack tenants.\n\nIssue: RELENG-1201\nChange-Id: I58dc200f7b29429ee1215bacdc533d234ad153fb\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536289612000,
      "lastUpdatedDate": 1536358056000,
      "isOpen": true,
      "status": "NEW",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["jwagantall"]
      ],
      "comments": [
        {
          "timestamp": 1536289612000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536289708000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1536289747000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3: Commit message was updated."
        },
        {
          "timestamp": 1536335586000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review-1\n\nDon\u0027t forget reno notes."
        },
        {
          "timestamp": 1536341796000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1536341979000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/294/"
        },
        {
          "timestamp": 1536342152000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/294/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/294"
        },
        {
          "timestamp": 1536348809000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 5: Patch Set 4 was rebased."
        },
        {
          "timestamp": 1536348885000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/298/"
        },
        {
          "timestamp": 1536349132000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/298/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/298"
        },
        {
          "timestamp": 1536349628000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 5:\n\nI want to test this.. let me do that and then I can post my review.."
        },
        {
          "timestamp": 1536351972000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 5:\n\n(1 comment)"
        },
        {
          "timestamp": 1536352342000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 5:\n\n(1 comment)"
        },
        {
          "timestamp": 1536358056000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 5:\n\n(1 comment)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "4c8a4cd76b2fd88b72cf9749000511031bdd581b",
          "parents": [
            "f5988d8e61013b13643575782b8418f31df65a3c"
          ],
          "ref": "refs/changes/83/12483/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536289612000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 86,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "1a935890675c3c7d2f06ef17fd1434f3eb53156a",
          "parents": [
            "f5988d8e61013b13643575782b8418f31df65a3c"
          ],
          "ref": "refs/changes/83/12483/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536289708000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 86,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "a9bc42abee5750f4d5da89bc8cf5bf02fae2e196",
          "parents": [
            "f5988d8e61013b13643575782b8418f31df65a3c"
          ],
          "ref": "refs/changes/83/12483/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536289747000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1536335586000,
              "grantedBy": ids["zxiiro"]
            }
          ],
          "comments": [],
          "sizeInsertions": 86,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "3b44464f6fe101ef6f19c15911092ce0be32bef5",
          "parents": [
            "f5988d8e61013b13643575782b8418f31df65a3c"
          ],
          "ref": "refs/changes/83/12483/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536341796000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536342152000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 98,
          "sizeDeletions": 0
        },
        {
          "number": 5,
          "revision": "50ce256a1e792c82f409c7b66b7b8bad1a9b5a37",
          "parents": [
            "ea7f2b8aaab8224860e82504109d4357eba00ec2"
          ],
          "ref": "refs/changes/83/12483/5",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536348809000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536349132000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "releasenotes/notes/share-openstack-images-4f1e3d18fdcb488b.yaml",
              "line": 8,
              "reviewer": ids["jwagantall"],
              "message": "This command needs to specify that \"os-cloud\" option is required. \nFor example:\nlftools openstack --os-cloud \u003ccloud\u003e image share ...",
              "patchSetTimestamp": 1536348809000
            },
            {
              "file": "releasenotes/notes/share-openstack-images-4f1e3d18fdcb488b.yaml",
              "line": 8,
              "reviewer": ids["jwagantall"],
              "message": "I think there is a conflict of usage messages, is it?\nFor example:\n\n(lftools-dev) jessicag@jessicag:~/linuxfoundation/lftools-dev/lftools$ lftools openstack image share --help\nUsage: lftools openstack [OPTIONS] COMMAND [ARGS]...\n\nError: Missing option \"--os-cloud\".",
              "patchSetTimestamp": 1536348809000
            },
            {
              "file": "releasenotes/notes/share-openstack-images-4f1e3d18fdcb488b.yaml",
              "line": 8,
              "reviewer": ids["zxiiro"],
              "message": "nope, that\u0027s not needed, the better way to do it actually is:\n\n export OS_CLOUD\u003dodl\n\nThen you never have to specify it again. This true for all \"openstack\" commands so I don\u0027t think it needs to be made explicit for every sub-command of \"openstack\".",
              "patchSetTimestamp": 1536348809000
            }
          ],
          "sizeInsertions": 98,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I1f6072fbfff003a4602d3765a6a5ce7c94fe4c58",
      "commitNumber": 12498,
      "subject": "Add cmd to upload openstack images",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12498",
      "commitMessage": "Add cmd to upload openstack images\n\nIssue: RELENG-1201\nChange-Id: I1f6072fbfff003a4602d3765a6a5ce7c94fe4c58\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536347377000,
      "lastUpdatedDate": 1536351502000,
      "isOpen": true,
      "status": "NEW",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"]
      ],
      "comments": [
        {
          "timestamp": 1536347377000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536347397000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2: Commit message was updated."
        },
        {
          "timestamp": 1536347447000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3: Commit message was updated."
        },
        {
          "timestamp": 1536347458000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/295/"
        },
        {
          "timestamp": 1536347496000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/296/"
        },
        {
          "timestamp": 1536347543000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/297/"
        },
        {
          "timestamp": 1536347682000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/295/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/295/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/295"
        },
        {
          "timestamp": 1536347708000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/296/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/296/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/296"
        },
        {
          "timestamp": 1536347757000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/297/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/297/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/297"
        },
        {
          "timestamp": 1536348809000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1536348937000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/299/"
        },
        {
          "timestamp": 1536349118000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/299/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/299"
        },
        {
          "timestamp": 1536349259000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1536351502000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4: Code-Review+1\n\nWould be nice to have but I\u0027m not going to block this change on the sha256sum. The servers that have the cloudimgs store them inside a single file that we\u0027d have to parse. There\u0027s no easy automated way where we can just fetch a 2nd file with the similar name."
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "183e8645d0e3eec508f207b89c2eeeb58d6db342",
          "parents": [
            "3b44464f6fe101ef6f19c15911092ce0be32bef5"
          ],
          "ref": "refs/changes/98/12498/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536347377000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1536347682000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 44,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "40e7e5a3c342015ae53ed3e0de0bc2ca56056034",
          "parents": [
            "3b44464f6fe101ef6f19c15911092ce0be32bef5"
          ],
          "ref": "refs/changes/98/12498/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536347397000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1536347708000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 44,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "774481773cee5fcacfa7e73e0cbee8d514c95e40",
          "parents": [
            "3b44464f6fe101ef6f19c15911092ce0be32bef5"
          ],
          "ref": "refs/changes/98/12498/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536347447000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1536347757000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 44,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "2aa73e8b4efaa399002983f04bc5a85089402301",
          "parents": [
            "50ce256a1e792c82f409c7b66b7b8bad1a9b5a37"
          ],
          "ref": "refs/changes/98/12498/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536348809000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1536351502000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536349118000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "lftools/openstack/image.py",
              "line": 196,
              "reviewer": ids["zxiiro"],
              "message": "We should probably verify the checksum of the downloaded file.",
              "patchSetTimestamp": 1536348809000
            }
          ],
          "sizeInsertions": 45,
          "sizeDeletions": 0
        }
      ]
    },
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
      "id": "I61ba5010034684374f99e9c909d854be750f7735",
      "commitNumber": 12399,
      "subject": "Add unit test for config subsystem",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12399",
      "commitMessage": "Add unit test for config subsystem\n\nChange-Id: I61ba5010034684374f99e9c909d854be750f7735\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535337301000,
      "lastUpdatedDate": 1536273659000,
      "isOpen": true,
      "status": "DRAFT",
      "reviewers": [],
      "comments": [
        {
          "timestamp": 1535337301000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536273659000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2: Patch Set 1 was rebased."
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "860c9a8c8d9aa25201723b5278a5b39b5c2f75ae",
          "parents": [
            "e1215526be2d06177b551c7a65e6858bf385f4e2"
          ],
          "ref": "refs/changes/99/12399/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535337301000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 29,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "bb2b9fdfacafbc2ca1084315f8ea5486e6e66711",
          "parents": [
            "f5988d8e61013b13643575782b8418f31df65a3c"
          ],
          "ref": "refs/changes/99/12399/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536273659000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "TRIVIAL_REBASE",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 29,
          "sizeDeletions": 0
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
      "project": "releng/lftools",
      "branch": "master",
      "id": "Ied7ff51a292199675dc944e36f1d821a5a2d045d",
      "commitNumber": 12353,
      "subject": "Add stack create \u0026 delete commands",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12353",
      "commitMessage": "Add stack create \u0026 delete commands\n\nAdd 2 new commands:\n\n    - stack create\n    - stack delete\n\nThese commands allow lftools the ability to create and delete stacks.\n\nIssue: RELENG-235\nChange-Id: Ied7ff51a292199675dc944e36f1d821a5a2d045d\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534892757000,
      "lastUpdatedDate": 1536245697000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["shague"],
        ids["jluhrsen"],
        ids["ecelgp"]
      ],
      "comments": [
        {
          "timestamp": 1534892757000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534899122000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1535070930000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1535071011000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/44/ (1/2)"
        },
        {
          "timestamp": 1535071057000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/247/ (2/2)"
        },
        {
          "timestamp": 1535071242000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/247/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/247/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/247\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/44/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/44"
        },
        {
          "timestamp": 1535071402000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1535071483000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/45/ (1/2)"
        },
        {
          "timestamp": 1535071544000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/248/ (2/2)"
        },
        {
          "timestamp": 1535071737000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/45/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/45\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/248/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/248"
        },
        {
          "timestamp": 1536107417000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4:\n\n@Jamo,Luis,Sam, Just FYI since this affects CSIT jobs."
        },
        {
          "timestamp": 1536245248000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4: Code-Review+1"
        },
        {
          "timestamp": 1536245695000,
          "reviewer": ids["shague"],
          "message": "Patch Set 4: Code-Review+2"
        },
        {
          "timestamp": 1536245697000,
          "reviewer": ids["shague"],
          "message": "Change has been successfully merged by Sam Hague"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "f081ab69eb047d734aa85fe7b6d7df59fbcbabc4",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/53/12353/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534892757000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 68,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "1b2fd8f547dc3d3523aa5e8134c2e33cf440338c",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/53/12353/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534899122000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 168,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "ead2f50016c1bfd67b99fa1dce3807d9d4c26800",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/53/12353/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535070930000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535071242000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 208,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "0a5942299f83aaa74da3bf1fdf985d4003ce30f3",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/53/12353/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535071402000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1536245248000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536245695000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536245697000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535071737000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 209,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I2481a364b9ddf2aa0ba9e2168d4ee408ca477c43",
      "commitNumber": 12400,
      "subject": "Deduplicate test requirements",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12400",
      "commitMessage": "Deduplicate test requirements\n\nSome of these tests being pulled in are duplicates. Let\u0027s consolidate\ninto requirements-test.txt as the source of truth.\n\nChange-Id: I2481a364b9ddf2aa0ba9e2168d4ee408ca477c43\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535338093000,
      "lastUpdatedDate": 1536245688000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["shague"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1535338093000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535338170000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/286/"
        },
        {
          "timestamp": 1535338399000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/286/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/286"
        },
        {
          "timestamp": 1536245214000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1536245686000,
          "reviewer": ids["shague"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536245688000,
          "reviewer": ids["shague"],
          "message": "Change has been successfully merged by Sam Hague"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "06c14a57395db7be8d17230ae245a0b083c4daad",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/00/12400/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535338093000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1536245214000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536245686000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536245688000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535338399000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 6,
          "sizeDeletions": -7
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I31329886088d8d7a469e19bc0937912546400109",
      "commitNumber": 12398,
      "subject": "Use logger instead of print in version module",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12398",
      "commitMessage": "Use logger instead of print in version module\n\nChange-Id: I31329886088d8d7a469e19bc0937912546400109\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535333153000,
      "lastUpdatedDate": 1536245625000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["shague"]
      ],
      "comments": [
        {
          "timestamp": 1535333153000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535333342000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/282/"
        },
        {
          "timestamp": 1535333579000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/282/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/282/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/282"
        },
        {
          "timestamp": 1535336133000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1535336312000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/285/"
        },
        {
          "timestamp": 1535336516000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/285/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/285"
        },
        {
          "timestamp": 1535410641000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3: Patch Set 2 was rebased."
        },
        {
          "timestamp": 1535410875000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/290/"
        },
        {
          "timestamp": 1535411065000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/290/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/290"
        },
        {
          "timestamp": 1536245282000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review+1"
        },
        {
          "timestamp": 1536245586000,
          "reviewer": ids["shague"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1536245625000,
          "reviewer": ids["shague"],
          "message": "Change has been successfully merged by Sam Hague"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "6b091837d9d9ce8e1b6e6172c1030850578551a4",
          "parents": [
            "000bc7ba0ec40ea6c00f54fe8dc73c2ffd7f6d5a"
          ],
          "ref": "refs/changes/98/12398/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535333153000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535333579000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "e1215526be2d06177b551c7a65e6858bf385f4e2",
          "parents": [
            "6d4440a03abada50e2705418f4628047828a0420"
          ],
          "ref": "refs/changes/98/12398/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535336133000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535336516000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 4,
          "sizeDeletions": -1
        },
        {
          "number": 3,
          "revision": "d10d79b4b8b0a95da454aa05436990c608247182",
          "parents": [
            "2e5148cb27a9413a96596ae2fd43bdaba518231e"
          ],
          "ref": "refs/changes/98/12398/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535410641000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1536245282000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536245586000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536245625000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535411065000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 4,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I47235cf9accd362ba1355ff77e15757543d30da1",
      "commitNumber": 12397,
      "subject": "Update config subsystem to use logger",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12397",
      "commitMessage": "Update config subsystem to use logger\n\nUse our logger service in the config subsystem.\n\nChange-Id: I47235cf9accd362ba1355ff77e15757543d30da1\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535331970000,
      "lastUpdatedDate": 1536245625000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["shague"]
      ],
      "comments": [
        {
          "timestamp": 1535331970000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535332386000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/279/"
        },
        {
          "timestamp": 1535332617000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/279/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/279/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/279"
        },
        {
          "timestamp": 1535332996000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1535333114000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/281/"
        },
        {
          "timestamp": 1535333361000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/281/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/281/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/281"
        },
        {
          "timestamp": 1535336133000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1535336297000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/284/"
        },
        {
          "timestamp": 1535336509000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/284/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/284"
        },
        {
          "timestamp": 1535410641000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4: Patch Set 3 was rebased."
        },
        {
          "timestamp": 1535410838000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/289/"
        },
        {
          "timestamp": 1535411097000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/289/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/289"
        },
        {
          "timestamp": 1536245272000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4: Code-Review+1"
        },
        {
          "timestamp": 1536245541000,
          "reviewer": ids["shague"],
          "message": "Patch Set 4: Code-Review+2"
        },
        {
          "timestamp": 1536245625000,
          "reviewer": ids["shague"],
          "message": "Change has been successfully merged by Sam Hague"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "42a2e7a9d9f6c2aa2bb26ee0745816b98d5b7ebe",
          "parents": [
            "8432e5bc9342a5d8bebe47abcfddbd1b48f5f27b"
          ],
          "ref": "refs/changes/97/12397/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535331970000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535332617000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 6,
          "sizeDeletions": -2
        },
        {
          "number": 2,
          "revision": "000bc7ba0ec40ea6c00f54fe8dc73c2ffd7f6d5a",
          "parents": [
            "0768f14a36b356d27f855023ecdb8df2aa336210"
          ],
          "ref": "refs/changes/97/12397/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535332996000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535333361000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 9,
          "sizeDeletions": -5
        },
        {
          "number": 3,
          "revision": "6d4440a03abada50e2705418f4628047828a0420",
          "parents": [
            "a0c3e6240ecdfddaa940d298b5081d1c00761f03"
          ],
          "ref": "refs/changes/97/12397/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535336133000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535336509000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 11,
          "sizeDeletions": -5
        },
        {
          "number": 4,
          "revision": "2e5148cb27a9413a96596ae2fd43bdaba518231e",
          "parents": [
            "4edf459161faeaebe1614ff16f18101f0785adc6"
          ],
          "ref": "refs/changes/97/12397/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535410641000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1536245272000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536245541000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536245625000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535411097000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 11,
          "sizeDeletions": -5
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "Ic35222ee654306e686052c209b641f9e49d38144",
      "commitNumber": 12390,
      "subject": "Only print extra log details in DEBUG mode",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12390",
      "commitMessage": "Only print extra log details in DEBUG mode\n\nThis allow us to change all our print statements to log.info() and\nhave it still print sanely like a CLI application. Then when DEBUG\nmode is enabled it will print the extra details to let us\ntroubleshoot. ERROR and CRITICAL logs will prefix with \"ERROR: \"\nfor example.\n\nChange-Id: Ic35222ee654306e686052c209b641f9e49d38144\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535159160000,
      "lastUpdatedDate": 1536245625000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["shague"]
      ],
      "comments": [
        {
          "timestamp": 1535159160000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535159341000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1535159575000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/267/"
        },
        {
          "timestamp": 1535159629000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/268/"
        },
        {
          "timestamp": 1535159784000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/267/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/267/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/267"
        },
        {
          "timestamp": 1535159838000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/268/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/268/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/268"
        },
        {
          "timestamp": 1535159848000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1535159935000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/269/"
        },
        {
          "timestamp": 1535160184000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/269/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/269"
        },
        {
          "timestamp": 1535331018000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1535331084000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/277/"
        },
        {
          "timestamp": 1535331302000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/277/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/277/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/277"
        },
        {
          "timestamp": 1535331970000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1535332047000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/278/"
        },
        {
          "timestamp": 1535332289000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/278/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/278/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/278"
        },
        {
          "timestamp": 1535332996000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 6."
        },
        {
          "timestamp": 1535333067000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/280/"
        },
        {
          "timestamp": 1535333294000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/280/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/280"
        },
        {
          "timestamp": 1535336133000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 7."
        },
        {
          "timestamp": 1535336241000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/283/"
        },
        {
          "timestamp": 1535336490000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/283/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/283"
        },
        {
          "timestamp": 1535410641000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 8."
        },
        {
          "timestamp": 1535410755000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/288/"
        },
        {
          "timestamp": 1535410991000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/288/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/288"
        },
        {
          "timestamp": 1536245294000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 8: Code-Review+1"
        },
        {
          "timestamp": 1536245533000,
          "reviewer": ids["shague"],
          "message": "Patch Set 8: Code-Review+2"
        },
        {
          "timestamp": 1536245625000,
          "reviewer": ids["shague"],
          "message": "Change has been successfully merged by Sam Hague"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "a8d91d5ed91aff72e0c0bb859ada7f94af435ad5",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/90/12390/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535159160000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535159784000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 15,
          "sizeDeletions": -5
        },
        {
          "number": 2,
          "revision": "0a06d5fe31a4a958ee2cd04c45ad1fb2c7a45373",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/90/12390/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535159341000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535159838000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 13,
          "sizeDeletions": -2
        },
        {
          "number": 3,
          "revision": "7ddb787508793ff402ff30c2c296fb66218e7b91",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/90/12390/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535159848000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535160184000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 14,
          "sizeDeletions": -2
        },
        {
          "number": 4,
          "revision": "4c22dec1bf62f9c8c6b6323fe500ca5d6e2d9be9",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/90/12390/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535331018000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535331302000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 17,
          "sizeDeletions": -2
        },
        {
          "number": 5,
          "revision": "8432e5bc9342a5d8bebe47abcfddbd1b48f5f27b",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/90/12390/5",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535331970000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535332289000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 19,
          "sizeDeletions": -2
        },
        {
          "number": 6,
          "revision": "0768f14a36b356d27f855023ecdb8df2aa336210",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/90/12390/6",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535332996000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535333294000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 20,
          "sizeDeletions": -2
        },
        {
          "number": 7,
          "revision": "a0c3e6240ecdfddaa940d298b5081d1c00761f03",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/90/12390/7",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535336133000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535336490000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 22,
          "sizeDeletions": -4
        },
        {
          "number": 8,
          "revision": "4edf459161faeaebe1614ff16f18101f0785adc6",
          "parents": [
            "bf6ca83a3f20a15dd83800f3953cc3f5e449250b"
          ],
          "ref": "refs/changes/90/12390/8",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535410641000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1536245294000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536245533000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536245625000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535410991000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 28,
          "sizeDeletions": -4
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "Ic7af1eb53e8e9079b845203f44914310616c4bab",
      "commitNumber": 12391,
      "subject": "Add support to jenkins cmd for jenkins_jobs.ini",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12391",
      "commitMessage": "Add support to jenkins cmd for jenkins_jobs.ini\n\nAllow the jenkins command to use existing jenkins_jobs.ini for\nconfiguration. By default assume jenkins_jobs.ini\u0027s default\nconfiguration \u0027jenkins\u0027.\n\nThis change makes \u0027server\u0027, \u0027user\u0027, and \u0027password\u0027 parameters no\nlonger required as defaults replace the need for these options.\n\n\u0027server\u0027 now defaults to \u0027jenkins\u0027 if jenkins_jobs.ini exists,\notherwise defaults to \u0027http://localhost:8080\u0027 which is the default\nJenkins deploy port.\n\n\u0027user\u0027 now defaults to \u0027admin\u0027 which is the Jenkins default admin\nuser.\n\n\u0027password\u0027 has no default and must be set by the user as this\nis randomly generated by Jenkins at boot.\n\nChange-Id: Ic7af1eb53e8e9079b845203f44914310616c4bab\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535175140000,
      "lastUpdatedDate": 1535463621000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["bramwelt"],
        ids["askb"]
      ],
      "comments": [
        {
          "timestamp": 1535175140000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535175322000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/270/"
        },
        {
          "timestamp": 1535175536000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/270/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/270/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/270"
        },
        {
          "timestamp": 1535175607000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1535175724000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/271/"
        },
        {
          "timestamp": 1535175966000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/271/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/271"
        },
        {
          "timestamp": 1535354869000,
          "reviewer": ids["askb"],
          "message": "Patch Set 2:\n\n(1 comment)"
        },
        {
          "timestamp": 1535378180000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\n(1 comment)"
        },
        {
          "timestamp": 1535406974000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1535408623000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
        },
        {
          "timestamp": 1535463621000,
          "reviewer": ids["askb"],
          "message": "Patch Set 2: Code-Review+2"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "2fb09a53cf0fa3c84b7faf85a9616edca87696d7",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/91/12391/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535175140000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535175536000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 31,
          "sizeDeletions": -4
        },
        {
          "number": 2,
          "revision": "54c0bdb08963841eecd01cc816d485d15f1e9de1",
          "parents": [
            "37c20018f44522eb56a9d7d54ab9f4c35c6e19d8"
          ],
          "ref": "refs/changes/91/12391/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535175607000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1535408623000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535406974000,
              "grantedBy": ids["bramwelt"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535463621000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535175966000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "releasenotes/notes/jenkins-25629106553ebbd5.yaml",
              "line": 5,
              "reviewer": ids["askb"],
              "message": "how does this file get generated, Do we add this manually for every change submitted?",
              "patchSetTimestamp": 1535175607000
            },
            {
              "file": "releasenotes/notes/jenkins-25629106553ebbd5.yaml",
              "line": 5,
              "reviewer": ids["zxiiro"],
              "message": "We use reno for release notes in lftools now. These files are generated using the reno tool. pip install reno and then run `reno new \u003ckeyword\u003e`. Documentation for reno is available via the reno project: https://docs.openstack.org/reno/latest/user/usage.html",
              "patchSetTimestamp": 1535175607000
            }
          ],
          "sizeInsertions": 30,
          "sizeDeletions": -4
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I954835b3e1a1700119d2e2328444b7794e7365fc",
      "commitNumber": 12392,
      "subject": "Add ruamel.yaml and yaml as known 3rdparty",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12392",
      "commitMessage": "Add ruamel.yaml and yaml as known 3rdparty\n\nChange-Id: I954835b3e1a1700119d2e2328444b7794e7365fc\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535175607000,
      "lastUpdatedDate": 1535408614000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["agardner"],
        ids["bramwelt"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1535175607000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535175770000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/272/"
        },
        {
          "timestamp": 1535175999000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/272/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/272"
        },
        {
          "timestamp": 1535406993000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1535408614000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "37c20018f44522eb56a9d7d54ab9f4c35c6e19d8",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/92/12392/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535175607000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1535408614000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535406993000,
              "grantedBy": ids["bramwelt"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535175999000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 5,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "Ie2206b43b094e1576936ba934268dc0b68fc5a40",
      "commitNumber": 12384,
      "subject": "Make ldap module optional",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12384",
      "commitMessage": "Make ldap module optional\n\nInstall via \u0027pip install lftools[ldap]\u0027.\n\nChange-Id: Ie2206b43b094e1576936ba934268dc0b68fc5a40\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535125206000,
      "lastUpdatedDate": 1535126179000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["agardner"],
        ids["askb"]
      ],
      "comments": [
        {
          "timestamp": 1535125206000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535125386000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/264/"
        },
        {
          "timestamp": 1535125446000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1535125583000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1535125654000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/264/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/264/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/264"
        },
        {
          "timestamp": 1535125661000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/265/"
        },
        {
          "timestamp": 1535125721000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/266/"
        },
        {
          "timestamp": 1535125947000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/265/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/265/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/265"
        },
        {
          "timestamp": 1535125982000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/266/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/266"
        },
        {
          "timestamp": 1535126134000,
          "reviewer": ids["askb"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1535126175000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1535126179000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "059200ecd459c98a639d31d2d303b3afa503ead3",
          "parents": [
            "58f28699725a52f14f70b44fd3c72243612d1ef9"
          ],
          "ref": "refs/changes/84/12384/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535125206000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535125654000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 26,
          "sizeDeletions": -3
        },
        {
          "number": 2,
          "revision": "bfc6a663b1996cbbfa777cf301a034de518b4afc",
          "parents": [
            "58f28699725a52f14f70b44fd3c72243612d1ef9"
          ],
          "ref": "refs/changes/84/12384/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535125446000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535125947000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 42,
          "sizeDeletions": -3
        },
        {
          "number": 3,
          "revision": "3a409e15b5ad16715525fc86ad163f61b890645f",
          "parents": [
            "58f28699725a52f14f70b44fd3c72243612d1ef9"
          ],
          "ref": "refs/changes/84/12384/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535125583000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1535126179000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535126175000,
              "grantedBy": ids["agardner"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535126134000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535125982000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 43,
          "sizeDeletions": -3
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I19b0358a85beb281a07df1ef8ea84c8c7593927f",
      "commitNumber": 12383,
      "subject": "Remove summary/version which comes from PBR now",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12383",
      "commitMessage": "Remove summary/version which comes from PBR now\n\nChange-Id: I19b0358a85beb281a07df1ef8ea84c8c7593927f\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535121503000,
      "lastUpdatedDate": 1535123336000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["jeremyphelps"],
        ids["lf-jenkins"],
        ids["agrimberg"],
        ids["zxiiro"]
      ],
      "comments": [
        {
          "timestamp": 1535121503000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535121627000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1535121722000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/262/"
        },
        {
          "timestamp": 1535121922000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/262/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/262/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/262"
        },
        {
          "timestamp": 1535122312000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1535122435000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/51/ (1/2)"
        },
        {
          "timestamp": 1535122501000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/263/ (2/2)"
        },
        {
          "timestamp": 1535122757000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/51/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/51\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/263/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/263"
        },
        {
          "timestamp": 1535123301000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1535123335000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1535123336000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "09ac3622368d295a8fcb2ca31c8f4dfd6e65a25e",
          "parents": [
            "b925b66ad125f8fc359e8a35ecfbbcf5779b614d"
          ],
          "ref": "refs/changes/83/12383/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535121503000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535121627000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535121922000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 0,
          "sizeDeletions": -3
        },
        {
          "number": 2,
          "revision": "58f28699725a52f14f70b44fd3c72243612d1ef9",
          "parents": [
            "b925b66ad125f8fc359e8a35ecfbbcf5779b614d"
          ],
          "ref": "refs/changes/83/12383/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535122312000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535123335000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1535123336000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535123301000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535122757000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 4,
          "sizeDeletions": -6
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I253a127f7dc0cee5475d8403da8f82e018fdf36e",
      "commitNumber": 12379,
      "subject": "Add option to enable debug logs",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12379",
      "commitMessage": "Add option to enable debug logs\n\nDefault the logger to INFO level and add an option to turn on DEBUG\nlevel logs. Update the unit_tests to pass in a context since we need\nit now in order to support the top-level configuration.\n\nChange-Id: I253a127f7dc0cee5475d8403da8f82e018fdf36e\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535075584000,
      "lastUpdatedDate": 1535120798000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["jeremyphelps"]
      ],
      "comments": [
        {
          "timestamp": 1535075584000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535075691000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/46/ (1/2)"
        },
        {
          "timestamp": 1535075760000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/250/ (2/2)"
        },
        {
          "timestamp": 1535075945000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/46/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/46/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/46\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/250/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/250/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/250"
        },
        {
          "timestamp": 1535076404000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2: Patch Set 1 was rebased."
        },
        {
          "timestamp": 1535076513000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/47/ (1/2)"
        },
        {
          "timestamp": 1535076545000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/252/ (2/2)"
        },
        {
          "timestamp": 1535076757000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/252/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/252/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/252\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/47/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/47"
        },
        {
          "timestamp": 1535080978000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3: Patch Set 2 was rebased."
        },
        {
          "timestamp": 1535081090000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/49/ (1/2)"
        },
        {
          "timestamp": 1535081116000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/255/ (2/2)"
        },
        {
          "timestamp": 1535081320000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/255/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/255/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/255\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/49/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/49"
        },
        {
          "timestamp": 1535085111000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1535085233000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/50/ (1/2)"
        },
        {
          "timestamp": 1535085288000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/259/ (2/2)"
        },
        {
          "timestamp": 1535085532000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/50/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/50\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/259/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/259"
        },
        {
          "timestamp": 1535120626000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 4: Code-Review+2"
        },
        {
          "timestamp": 1535120798000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "c063e22d00633206d97514b9cc9a4d48b63e5ec4",
          "parents": [
            "1ae0fddcca04a675ea40b67ca8e0fd7ba873b53d"
          ],
          "ref": "refs/changes/79/12379/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535075584000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535075945000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 24,
          "sizeDeletions": -3
        },
        {
          "number": 2,
          "revision": "1228fd6e0d9104d16d6b266c81e6ce1d2816b89d",
          "parents": [
            "7bb1c3885acaa2b294eb67162c9571001d780505"
          ],
          "ref": "refs/changes/79/12379/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535076404000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535076757000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 24,
          "sizeDeletions": -3
        },
        {
          "number": 3,
          "revision": "67bdcebf6b429dfa8b06812bbeae10a920dbfbd2",
          "parents": [
            "28fc57084d22dd96db149069666e945b039b474a"
          ],
          "ref": "refs/changes/79/12379/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535080978000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535081320000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 24,
          "sizeDeletions": -3
        },
        {
          "number": 4,
          "revision": "2380b4e056c54b0258bffa43972fbc171b4af481",
          "parents": [
            "28fc57084d22dd96db149069666e945b039b474a"
          ],
          "ref": "refs/changes/79/12379/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535085111000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1535120798000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535120626000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535085532000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 30,
          "sizeDeletions": -10
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I132bebe298164419fae43e94299f43c45940bc4e",
      "commitNumber": 12381,
      "subject": "Add extras declaration in docs-linkcheck",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12381",
      "commitMessage": "Add extras declaration in docs-linkcheck\n\nThis should have been added to\nI1f33c65a44cf6eaa0e29e5734f3a8edcd8865868\n\nAlso include missing reno notes.\n\nChange-Id: I132bebe298164419fae43e94299f43c45940bc4e\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535080978000,
      "lastUpdatedDate": 1535120784000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["jeremyphelps"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1535080978000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535081168000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/256/"
        },
        {
          "timestamp": 1535081408000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/256/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/256"
        },
        {
          "timestamp": 1535120666000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1535120784000,
          "reviewer": ids["jeremyphelps"],
          "message": "Change has been successfully merged by Jeremy Phelps"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "32275fd2e51e759b4b2c4c4b5f6c6ea4baaffa6c",
          "parents": [
            "8c2e97f01e2c55202546cb5a936ee7b578b5a9af"
          ],
          "ref": "refs/changes/81/12381/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535080978000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535120666000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1535120784000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535081408000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 5,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I74158d94400112161ad4fc206426420d908deb0c",
      "commitNumber": 12378,
      "subject": "Simplify logging configuration",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12378",
      "commitMessage": "Simplify logging configuration\n\nlftools should be a simple tool and folks should not ever need to\nconfigure the logger so let\u0027s simplify things and just pre-define\nan acceptable logger configuration. The important component is\nhaving (DEBUG) messages print via logger service. A subsequent\npatch will be provided to enable --debug level logs via CLI.\n\nChange-Id: I74158d94400112161ad4fc206426420d908deb0c\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535075584000,
      "lastUpdatedDate": 1535120784000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["jeremyphelps"]
      ],
      "comments": [
        {
          "timestamp": 1535075584000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535075739000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/249/"
        },
        {
          "timestamp": 1535075937000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/249/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/249/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/249"
        },
        {
          "timestamp": 1535076404000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2: Patch Set 1 was rebased."
        },
        {
          "timestamp": 1535076511000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/251/"
        },
        {
          "timestamp": 1535076730000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/251/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/251/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/251"
        },
        {
          "timestamp": 1535080978000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3: Patch Set 2 was rebased."
        },
        {
          "timestamp": 1535081066000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/254/"
        },
        {
          "timestamp": 1535081272000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/254/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/254"
        },
        {
          "timestamp": 1535120776000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1535120784000,
          "reviewer": ids["jeremyphelps"],
          "message": "Change has been successfully merged by Jeremy Phelps"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "1ae0fddcca04a675ea40b67ca8e0fd7ba873b53d",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/78/12378/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535075584000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535075937000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 11,
          "sizeDeletions": -69
        },
        {
          "number": 2,
          "revision": "7bb1c3885acaa2b294eb67162c9571001d780505",
          "parents": [
            "8c2e97f01e2c55202546cb5a936ee7b578b5a9af"
          ],
          "ref": "refs/changes/78/12378/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535076404000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535076730000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 11,
          "sizeDeletions": -69
        },
        {
          "number": 3,
          "revision": "28fc57084d22dd96db149069666e945b039b474a",
          "parents": [
            "32275fd2e51e759b4b2c4c4b5f6c6ea4baaffa6c"
          ],
          "ref": "refs/changes/78/12378/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535080978000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535120776000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1535120784000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535081272000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 11,
          "sizeDeletions": -69
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I1f33c65a44cf6eaa0e29e5734f3a8edcd8865868",
      "commitNumber": 12380,
      "subject": "Fix broken help from openstack and sign cmds",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12380",
      "commitMessage": "Fix broken help from openstack and sign cmds\n\nThese were never caught since we did not enable fail on warnings\nfor Sphinx until recently.\n\nChange-Id: I1f33c65a44cf6eaa0e29e5734f3a8edcd8865868\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535076404000,
      "lastUpdatedDate": 1535080782000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["askb"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1535076404000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535076574000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/48/ (1/2)"
        },
        {
          "timestamp": 1535076574000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/253/ (2/2)"
        },
        {
          "timestamp": 1535076794000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/48/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/48\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/253/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/253"
        },
        {
          "timestamp": 1535080777000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1535080782000,
          "reviewer": ids["askb"],
          "message": "Change has been successfully merged by Anil Belur"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "8c2e97f01e2c55202546cb5a936ee7b578b5a9af",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/80/12380/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535076404000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535080777000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1535080782000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535076794000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 2,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "Iadb0ca93a6f1f6a56c948b42bd257040547fffcc",
      "commitNumber": 12330,
      "subject": "Use reno for release notes",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12330",
      "commitMessage": "Use reno for release notes\n\nChange-Id: Iadb0ca93a6f1f6a56c948b42bd257040547fffcc\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534785811000,
      "lastUpdatedDate": 1534808571000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["jwagantall"]
      ],
      "comments": [
        {
          "timestamp": 1534785811000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534785882000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/42/ (1/2)"
        },
        {
          "timestamp": 1534785913000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/238/ (2/2)"
        },
        {
          "timestamp": 1534786046000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review-2\n\nNeed to investigate release tag regex."
        },
        {
          "timestamp": 1534786121000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/42/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/42\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/238/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/238"
        },
        {
          "timestamp": 1534788256000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1534788277000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+1"
        },
        {
          "timestamp": 1534788389000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/43/ (1/2)"
        },
        {
          "timestamp": 1534788444000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/239/ (2/2)"
        },
        {
          "timestamp": 1534788638000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/43/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/43\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/239/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/239"
        },
        {
          "timestamp": 1534808569000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1534808571000,
          "reviewer": ids["jwagantall"],
          "message": "Change has been successfully merged by Jessica Wagantall"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "d77da8252d3c54b6e70929979bf823646b5884d4",
          "parents": [
            "027b69985bd4ca1a8cc711cc5215a7d67d99678c"
          ],
          "ref": "refs/changes/30/12330/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534785811000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -2,
              "grantedOnDate": 1534786046000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534786121000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 8,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "c5085bebb6ebdc66a70a28c485ca4f66cffbc339",
          "parents": [
            "027b69985bd4ca1a8cc711cc5215a7d67d99678c"
          ],
          "ref": "refs/changes/30/12330/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534788256000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1534788277000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1534808569000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1534808571000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534788638000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 9,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I028540301560b76af1cb31f2d9c40612b3b3480f",
      "commitNumber": 12307,
      "subject": "Setup PBR for lftools",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12307",
      "commitMessage": "Setup PBR for lftools\n\nChange-Id: I028540301560b76af1cb31f2d9c40612b3b3480f\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534531602000,
      "lastUpdatedDate": 1534778444000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["agrimberg"]
      ],
      "comments": [
        {
          "timestamp": 1534531602000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534642570000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1534642761000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/236/"
        },
        {
          "timestamp": 1534643011000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/236/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/236/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/236"
        },
        {
          "timestamp": 1534643096000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1534643286000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/237/"
        },
        {
          "timestamp": 1534643487000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/237/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/237"
        },
        {
          "timestamp": 1534778442000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1534778444000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "34529f1f5085565db09dd91952b0e53fd2c2cc36",
          "parents": [
            "b383380735089719b120dd613eda4fcfa4ea55ff"
          ],
          "ref": "refs/changes/07/12307/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534531602000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 40,
          "sizeDeletions": -26
        },
        {
          "number": 2,
          "revision": "c56e319d51080da75f689baa2d94b88bd7624989",
          "parents": [
            "b383380735089719b120dd613eda4fcfa4ea55ff"
          ],
          "ref": "refs/changes/07/12307/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534642570000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1534643011000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 48,
          "sizeDeletions": -34
        },
        {
          "number": 3,
          "revision": "027b69985bd4ca1a8cc711cc5215a7d67d99678c",
          "parents": [
            "b383380735089719b120dd613eda4fcfa4ea55ff"
          ],
          "ref": "refs/changes/07/12307/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534643096000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1534778442000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1534778444000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534643487000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 48,
          "sizeDeletions": -35
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I4ac1ce147ada7176cdac399b83edc646973dd80e",
      "commitNumber": 12504,
      "subject": "Use Reno for release notes",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12504",
      "commitMessage": "Use Reno for release notes\n\nChange-Id: I4ac1ce147ada7176cdac399b83edc646973dd80e\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536361846000,
      "lastUpdatedDate": 1536366483000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["jwagantall"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1536361846000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536361912000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1536361956000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/311/ (1/2)"
        },
        {
          "timestamp": 1536362006000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/743/ (2/2)"
        },
        {
          "timestamp": 1536362182000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/311/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/311\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/743/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/743"
        },
        {
          "timestamp": 1536363141000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1536366227000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1536366481000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536366483000,
          "reviewer": ids["jwagantall"],
          "message": "Change has been successfully merged by Jessica Wagantall"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "67aa548eb9d34b53810478b7c972cf005e72b431",
          "parents": [
            "baacf438b7128ac60b458398219467235fcef9b1"
          ],
          "ref": "refs/changes/04/12504/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536361846000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1536361912000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536366481000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536366483000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536362182000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "docs/release-notes.rst",
              "line": 1,
              "reviewer": ids["jwagantall"],
              "message": "Is this meant to be empty?\n\nOr are we just adding the space for now?",
              "patchSetTimestamp": 1536361846000
            },
            {
              "file": "docs/release-notes.rst",
              "line": 1,
              "reviewer": ids["zxiiro"],
              "message": "This is entirely auto-generated by reno when you run `tox -e docs`. \".. release-notes::\" is the directive that tells reno to take over and run. We don\u0027t need to do anything here other than define this one line :)",
              "patchSetTimestamp": 1536361846000
            }
          ],
          "sizeInsertions": 5,
          "sizeDeletions": -2
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
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I02f0397ae5627f65638a456ba2f1304dd9a16de9",
      "commitNumber": 12461,
      "subject": "Strip out trailing metadata from version",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12461",
      "commitMessage": "Strip out trailing metadata from version\n\nWhen manually building maven plugins maven puts in some metadata\nlike \"2.38-SNAPSHOT (private-9853d407-zxiiro)\" which throws off the\nversion_ge function as it does not know how to handle a version with\na space in the name. This change strips out only the leading version\nignoring everything after a space.\n\nChange-Id: I02f0397ae5627f65638a456ba2f1304dd9a16de9\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536166054000,
      "lastUpdatedDate": 1536166606000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["jluhrsen"]
      ],
      "comments": [
        {
          "timestamp": 1536166054000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536166365000,
          "reviewer": ids["jluhrsen"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536166425000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/742/"
        },
        {
          "timestamp": 1536166598000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/742/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/742"
        },
        {
          "timestamp": 1536166606000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "8bab321b9a1713ac4c2b4bf6814dd4fc4b9f27f4",
          "parents": [
            "73c1e4ad26a06e40fee8e08aad09ed3831b4cdf6"
          ],
          "ref": "refs/changes/61/12461/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536166054000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536166606000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536166598000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536166365000,
              "grantedBy": ids["jluhrsen"]
            }
          ],
          "comments": [],
          "sizeInsertions": 2,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Ib6aaf0aa3a77d46a0cffa47e95cb298fc0048fdf",
      "commitNumber": 12418,
      "subject": "Update Sigul repo URL",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12418",
      "commitMessage": "Update Sigul repo URL\n\nUpstream seems to have moved things around. Update to point to the\ncurrent release repo.\n\nChange-Id: Ib6aaf0aa3a77d46a0cffa47e95cb298fc0048fdf\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535410799000,
      "lastUpdatedDate": 1535412055000,
      "isOpen": false,
      "status": "ABANDONED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1535410799000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535410947000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/741/"
        },
        {
          "timestamp": 1535411142000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/741/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/741"
        },
        {
          "timestamp": 1535411439000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review-2\n\nI think this URL might be wrong because none of the packages here are dated 2018. Not sure where else to find the sigul package...."
        },
        {
          "timestamp": 1535412055000,
          "reviewer": ids["zxiiro"],
          "message": "Abandoned\n\nUpdate from @mricon is that Koji people are aware of the broken repo and are working to fix it. We can\u0027t do anything other than wait at this point."
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "33249441a631ebc41a67df9566a152fa91d327e8",
          "parents": [
            "73c1e4ad26a06e40fee8e08aad09ed3831b4cdf6"
          ],
          "ref": "refs/changes/18/12418/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535410799000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -2,
              "grantedOnDate": 1535411439000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535411142000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I5cc5be89985e0fcb99cb256053282b5e740b05c1",
      "commitNumber": 12386,
      "subject": "Release global-jjb v0.24.0",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12386",
      "commitMessage": "Release global-jjb v0.24.0\n\nChange-Id: I5cc5be89985e0fcb99cb256053282b5e740b05c1\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535129032000,
      "lastUpdatedDate": 1535137594000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["jeremyphelps"],
        ids["lf-jenkins"],
        ids["jwagantall"],
        ids["agrimberg"]
      ],
      "comments": [
        {
          "timestamp": 1535129032000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535129069000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1535129223000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/733/"
        },
        {
          "timestamp": 1535129416000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/733/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/733/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/733"
        },
        {
          "timestamp": 1535129650000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nrecheck"
        },
        {
          "timestamp": 1535129731000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/734/"
        },
        {
          "timestamp": 1535129897000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/734/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/734/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/734"
        },
        {
          "timestamp": 1535136625000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2: Patch Set 1 was rebased."
        },
        {
          "timestamp": 1535136679000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1535136722000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/735/"
        },
        {
          "timestamp": 1535136918000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/735/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/735"
        },
        {
          "timestamp": 1535137269000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1535137349000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/737/"
        },
        {
          "timestamp": 1535137537000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/737/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/737"
        },
        {
          "timestamp": 1535137561000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1535137594000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "60ec4785f2e352de426bac9b572dceebaf6056ae",
          "parents": [
            "d87ce091fe93fff99e25343a69baaa26c186ca85"
          ],
          "ref": "refs/changes/86/12386/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535129032000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535129069000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535129897000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 73,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "c0eee9de2b4ad16e5c309b19e282f431ece94a40",
          "parents": [
            "39a6c08a76bd6ea41cca61075dbf8365b075043c"
          ],
          "ref": "refs/changes/86/12386/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535136625000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535136679000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535136918000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 73,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "73c1e4ad26a06e40fee8e08aad09ed3831b4cdf6",
          "parents": [
            "39a6c08a76bd6ea41cca61075dbf8365b075043c"
          ],
          "ref": "refs/changes/86/12386/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535137269000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535137561000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1535137594000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535137537000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 74,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I1816f34e964ff56cba3e5d7af693993c97b1cc7d",
      "commitNumber": 12388,
      "subject": "Re-enable CLM jobs",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12388",
      "commitMessage": "Re-enable CLM jobs\n\nChange-Id: I1816f34e964ff56cba3e5d7af693993c97b1cc7d\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535136625000,
      "lastUpdatedDate": 1535137196000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["jwagantall"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1535136625000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535136651000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1535136794000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/736/"
        },
        {
          "timestamp": 1535137049000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/736/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/736"
        },
        {
          "timestamp": 1535137196000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "39a6c08a76bd6ea41cca61075dbf8365b075043c",
          "parents": [
            "d87ce091fe93fff99e25343a69baaa26c186ca85"
          ],
          "ref": "refs/changes/88/12388/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535136625000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1535137196000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535136651000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535137049000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 2,
          "sizeDeletions": -2
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I9db6e8603a7d968aacf0eae17dea3554d6c97429",
      "commitNumber": 12377,
      "subject": "Add option to disable-job for all jobs",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12377",
      "commitMessage": "Add option to disable-job for all jobs\n\nAdd option to all jobs to allow disabling the job. CLM will has this\nsetting set to \"true\" while we figure out the CLM issues however\nfor all other jobs \"false\" is default.\n\nChange-Id: I9db6e8603a7d968aacf0eae17dea3554d6c97429\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535064996000,
      "lastUpdatedDate": 1535125169000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["jwagantall"],
        ids["askb"]
      ],
      "comments": [
        {
          "timestamp": 1535064996000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535065056000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1535065067000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/730/"
        },
        {
          "timestamp": 1535065138000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2: Commit message was updated."
        },
        {
          "timestamp": 1535065215000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/730/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/730"
        },
        {
          "timestamp": 1535065285000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/731/"
        },
        {
          "timestamp": 1535065493000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/731/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/731"
        },
        {
          "timestamp": 1535065668000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 2: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1535065701000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1535065712000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\n(1 comment)"
        },
        {
          "timestamp": 1535065757000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1535065874000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/732/"
        },
        {
          "timestamp": 1535066025000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/732/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/732"
        },
        {
          "timestamp": 1535120613000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review+1"
        },
        {
          "timestamp": 1535120614000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
        },
        {
          "timestamp": 1535125169000,
          "reviewer": ids["askb"],
          "message": "Patch Set 3: Code-Review+2"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "392f7c67550ed542a6893f465167d75a9694ee50",
          "parents": [
            "3e79ea1c1f71e75dc4192d9fd15ef3424c473f77"
          ],
          "ref": "refs/changes/77/12377/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535064996000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1535065056000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535065215000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 57,
          "sizeDeletions": -4
        },
        {
          "number": 2,
          "revision": "9c2ed070d86745a7929ebc727b5286e74178f8a5",
          "parents": [
            "3e79ea1c1f71e75dc4192d9fd15ef3424c473f77"
          ],
          "ref": "refs/changes/77/12377/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535065138000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1535065668000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535065493000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-python-jobs.yaml",
              "line": 95,
              "reviewer": ids["jwagantall"],
              "message": "This should be true since it is clm related",
              "patchSetTimestamp": 1535065138000
            },
            {
              "file": "jjb/lf-python-jobs.yaml",
              "line": 95,
              "reviewer": ids["zxiiro"],
              "message": "Done",
              "patchSetTimestamp": 1535065138000
            }
          ],
          "sizeInsertions": 57,
          "sizeDeletions": -4
        },
        {
          "number": 3,
          "revision": "9cb04c8a479acc4e67891bdf425c62afae7445fa",
          "parents": [
            "3e79ea1c1f71e75dc4192d9fd15ef3424c473f77"
          ],
          "ref": "refs/changes/77/12377/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535065701000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1535120613000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1535120614000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535125169000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535065757000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535066025000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 57,
          "sizeDeletions": -4
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I55947020e2f0cdbb61f9d4e7e88927d9bc304d17",
      "commitNumber": 12150,
      "subject": "Add pre-build step to prep vm before build",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12150",
      "commitMessage": "Add pre-build step to prep vm before build\n\nThis new build step will run before any jobs run to prep the\nbuilder.\n\nThis change should not force using of $HOME/.local/bin just yet\nbut preps the macros in place for us to activate it in jobs later.\nThe current virtualenv method should override what\u0027s done here.\n\nChange-Id: I55947020e2f0cdbb61f9d4e7e88927d9bc304d17\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1533692398000,
      "lastUpdatedDate": 1535121742000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["bramwelt"],
        ids["jeremyphelps"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1533692398000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1533692432000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nWe should definitely test this heavily before rolling it out."
        },
        {
          "timestamp": 1534627007000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1534627075000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/724/"
        },
        {
          "timestamp": 1534627091000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+1"
        },
        {
          "timestamp": 1534627163000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\n(1 comment)"
        },
        {
          "timestamp": 1534627203000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1534627210000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review+1"
        },
        {
          "timestamp": 1534627231000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/724/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/724/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/724"
        },
        {
          "timestamp": 1534627286000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/725/"
        },
        {
          "timestamp": 1534627443000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/725/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/725/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/725"
        },
        {
          "timestamp": 1534874225000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1534874361000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/308/ (1/2)"
        },
        {
          "timestamp": 1534874373000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/728/ (2/2)"
        },
        {
          "timestamp": 1534874531000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/308/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/308\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/728/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/728"
        },
        {
          "timestamp": 1535120592000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4: Code-Review+1"
        },
        {
          "timestamp": 1535121725000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 4: Code-Review+2"
        },
        {
          "timestamp": 1535121727000,
          "reviewer": ids["jeremyphelps"],
          "message": "Change has been successfully merged by Jeremy Phelps"
        },
        {
          "timestamp": 1535121742000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4:\n\nSince this was asked in IRC. The `-l` flag does not affect Jenkins\u0027 injection of environment variables. They still get passed in."
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "8a35e1d85e715da711e240ff08c2f66e24ed52e7",
          "parents": [
            "8a5ed774fd2f4109ff9fe6da4359263dc3a1ab29"
          ],
          "ref": "refs/changes/50/12150/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533692398000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 32,
          "sizeDeletions": -2
        },
        {
          "number": 2,
          "revision": "51eaa4905557f05c9297a942f78648acaed7f750",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/50/12150/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534627007000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1534627091000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1534627231000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/python-tools-install.sh",
              "line": 24,
              "reviewer": ids["zxiiro"],
              "message": "pip freeze is probably a good idea.",
              "patchSetTimestamp": 1534627007000
            }
          ],
          "sizeInsertions": 39,
          "sizeDeletions": -9
        },
        {
          "number": 3,
          "revision": "5f544b9e6a5ecdb346c6a228025a7b37b06692e7",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/50/12150/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534627203000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1534627210000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1534627443000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 40,
          "sizeDeletions": -9
        },
        {
          "number": 4,
          "revision": "b3c4fefa00bb18fe2d8ae6f4ba3e2bf0abd154c5",
          "parents": [
            "33acf6e113cf0f9fa8ce4bfa1df9df5473c28c41"
          ],
          "ref": "refs/changes/50/12150/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534874225000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1535120592000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535121725000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1535121727000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534874531000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 45,
          "sizeDeletions": -9
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Ib706663f0c08bd7a9160b0a6ce69dcd3b802f8f5",
      "commitNumber": 12089,
      "subject": "Move openstack-cron job to global-jjb",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12089",
      "commitMessage": "Move openstack-cron job to global-jjb\n\nMove OpenDaylight\u0027s builder-openstack-cron job to global-jjb. This is\nan initial patch that only migrates the \"image-protection\" script.\n\nimage-protection is used to parse jenkins-config/ and jjb/ directories\nfor any mention of images starting with \"ZZCI\" and flagging them as\nprotected. The assumption here is that ZZCI images are CI managed\nand if they are referred to anywher by anything then they are\neffectively considered in-use and should not be deletable so flag\nthem as \"protected: true\" in OpenStack.\n\nChange-Id: Ib706663f0c08bd7a9160b0a6ce69dcd3b802f8f5\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1533248747000,
      "lastUpdatedDate": 1534912772000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["jeremyphelps"],
        ids["agrimberg"],
        ids["askb"]
      ],
      "comments": [
        {
          "timestamp": 1533248747000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1533855314000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1533856981000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1533857084000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1533857144000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1533857930000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 6."
        },
        {
          "timestamp": 1533858011000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/693/"
        },
        {
          "timestamp": 1533858163000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/693/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/693/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/693"
        },
        {
          "timestamp": 1533860928000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 7."
        },
        {
          "timestamp": 1533861004000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/695/"
        },
        {
          "timestamp": 1533861144000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/695/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/695/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/695"
        },
        {
          "timestamp": 1533861478000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 7: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1533863246000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 7:\n\n(1 comment)"
        },
        {
          "timestamp": 1534472279000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 8."
        },
        {
          "timestamp": 1534472396000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/295/ (1/2)"
        },
        {
          "timestamp": 1534472446000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/696/ (2/2)"
        },
        {
          "timestamp": 1534472579000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/696/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/696/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/696\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/295/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/295"
        },
        {
          "timestamp": 1534472648000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 8:\n\n(1 comment)\n\nrecheck"
        },
        {
          "timestamp": 1534472821000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 9."
        },
        {
          "timestamp": 1534472936000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/296/ (1/2)"
        },
        {
          "timestamp": 1534472986000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/697/ (2/2)"
        },
        {
          "timestamp": 1534473183000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/697/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/697/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/697\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/296/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/296"
        },
        {
          "timestamp": 1534518429000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 9:\n\nrecheck"
        },
        {
          "timestamp": 1534518558000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/297/ (1/2)"
        },
        {
          "timestamp": 1534518572000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/698/ (2/2)"
        },
        {
          "timestamp": 1534518714000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/297/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/297\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/698/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/698"
        },
        {
          "timestamp": 1534532779000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 9:\n\n(1 comment)"
        },
        {
          "timestamp": 1534532994000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 9: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1534533108000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 9:\n\n(1 comment)"
        },
        {
          "timestamp": 1534533197000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 9:\n\n(1 comment)"
        },
        {
          "timestamp": 1534534599000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 9:\n\n(2 comments)"
        },
        {
          "timestamp": 1534557156000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 9:\n\n(3 comments)"
        },
        {
          "timestamp": 1534557169000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 10."
        },
        {
          "timestamp": 1534557243000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/302/ (1/3)"
        },
        {
          "timestamp": 1534557299000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/707/ (2/3)"
        },
        {
          "timestamp": 1534557417000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/9/ (3/3)"
        },
        {
          "timestamp": 1534557730000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 10: Code-Review+1"
        },
        {
          "timestamp": 1534558654000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10:\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/302/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/302\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/707/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/707\n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/9/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/9"
        },
        {
          "timestamp": 1534558792000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 10:\n\nrecheck"
        },
        {
          "timestamp": 1534558855000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/303/ (1/2)"
        },
        {
          "timestamp": 1534558905000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/709/ (2/2)"
        },
        {
          "timestamp": 1534559053000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/303/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/303\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/709/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/709"
        },
        {
          "timestamp": 1534784723000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 10: Code-Review+2"
        },
        {
          "timestamp": 1534784724000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        },
        {
          "timestamp": 1534912772000,
          "reviewer": ids["askb"],
          "message": "Patch Set 10: Code-Review+2"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "4ffceaf68e6a2734d26de463d4effd39dd59927b",
          "parents": [
            "356637f0d3d4091aecde9889c1bc9ec758a33336"
          ],
          "ref": "refs/changes/89/12089/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533248747000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 145,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "827b04f997822dca99dd0872e57d4c0ce23644f7",
          "parents": [
            "3ae312fbcced7c547bbe98a5692a6d2dcfc17558"
          ],
          "ref": "refs/changes/89/12089/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533855314000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 120,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "fb2809c45a676a4c27bba5c75125de7cfbb69dc3",
          "parents": [
            "3ae312fbcced7c547bbe98a5692a6d2dcfc17558"
          ],
          "ref": "refs/changes/89/12089/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533856981000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 142,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "5ac03c9b791c9759f3d4e125f4eeda495ab5da18",
          "parents": [
            "3ae312fbcced7c547bbe98a5692a6d2dcfc17558"
          ],
          "ref": "refs/changes/89/12089/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533857084000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 144,
          "sizeDeletions": 0
        },
        {
          "number": 5,
          "revision": "bc6cc7ef3fa73e39be4300ccb190797ba3dbbabd",
          "parents": [
            "3ae312fbcced7c547bbe98a5692a6d2dcfc17558"
          ],
          "ref": "refs/changes/89/12089/5",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533857144000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 144,
          "sizeDeletions": 0
        },
        {
          "number": 6,
          "revision": "c9b375460e82fa2a6173f515bb00fb897cc86dd4",
          "parents": [
            "3ae312fbcced7c547bbe98a5692a6d2dcfc17558"
          ],
          "ref": "refs/changes/89/12089/6",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533857930000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1533858163000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 169,
          "sizeDeletions": 0
        },
        {
          "number": 7,
          "revision": "0dd206d7a8c7d629b9c1a37721802c5d413e96b0",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/89/12089/7",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533860928000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1533861478000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1533861144000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/openstack-protect-in-use-images.sh",
              "line": 28,
              "reviewer": ids["zxiiro"],
              "message": "This overrides the previous image :(",
              "patchSetTimestamp": 1533860928000
            },
            {
              "file": "shell/openstack-protect-in-use-images.sh",
              "line": 32,
              "reviewer": ids["zxiiro"],
              "message": "I wonder if we can get the protected setting from calling \"openstack image list\" so that we only hit the api once and cache it.",
              "patchSetTimestamp": 1533860928000
            },
            {
              "file": "shell/openstack-protect-in-use-images.sh",
              "line": 32,
              "reviewer": ids["zxiiro"],
              "message": "Nope :(\n\n$ openstack --os-cloud opendaylight image list -c protected\nNo recognized column names in [\u0027protected\u0027]. Recognized columns are (\u0027ID\u0027, \u0027Name\u0027, \u0027Status\u0027).",
              "patchSetTimestamp": 1533860928000
            }
          ],
          "sizeInsertions": 165,
          "sizeDeletions": 0
        },
        {
          "number": 8,
          "revision": "df7d40a7c575335504c6dfbca3175a5f9cfbf11d",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/89/12089/8",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534472279000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1534472579000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 203,
          "sizeDeletions": 0
        },
        {
          "number": 9,
          "revision": "a8bf421dfb474d51165feda1cabab2d184491bf6",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/89/12089/9",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534472821000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1534532994000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534518714000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 1074,
              "reviewer": ids["jeremyphelps"],
              "message": "This represents a breaking change as it will fail if the file doesn\u0027t exist.  Just calling out.",
              "patchSetTimestamp": 1534472821000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 1074,
              "reviewer": ids["zxiiro"],
              "message": "yep this file is required though to do anything with openstack. We should document it in ci-jobs.rst though",
              "patchSetTimestamp": 1534472821000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 1074,
              "reviewer": ids["zxiiro"],
              "message": "Done",
              "patchSetTimestamp": 1534472821000
            },
            {
              "file": "shell/openstack-protect-in-use-images.sh",
              "line": 27,
              "reviewer": ids["jeremyphelps"],
              "message": "This command doesn\u0027t seem to be valid, at least on my laptop \njphelps@workhorse ~/projects/edgex/ci-management                                                                                                                                                 \n\u003e $ grep -r \u0027ZZCI - \u0027 --include \\*.yaml | awk -F\": \" -e \u0027{print $3}\u0027 | sed \"s:\u0027::;s:\u0027$::;/^$/d\" | sort -u                                                               \nawk: not an option: -e",
              "patchSetTimestamp": 1534472821000
            },
            {
              "file": "shell/openstack-protect-in-use-images.sh",
              "line": 27,
              "reviewer": ids["jeremyphelps"],
              "message": "cfg_images array...the grep only looks in yaml.\nand below\nyaml_images only looks in .cfg files.",
              "patchSetTimestamp": 1534472821000
            },
            {
              "file": "shell/openstack-protect-in-use-images.sh",
              "line": 27,
              "reviewer": ids["zxiiro"],
              "message": "doh, i\u0027ll fix that...",
              "patchSetTimestamp": 1534472821000
            },
            {
              "file": "shell/openstack-protect-in-use-images.sh",
              "line": 27,
              "reviewer": ids["zxiiro"],
              "message": "It is valid at least on CentOS. Here\u0027s my test here:\n\nhttps://jenkins.opendaylight.org/sandbox/job/builder-openstack-cron/4/",
              "patchSetTimestamp": 1534472821000
            },
            {
              "file": "shell/openstack-protect-in-use-images.sh",
              "line": 27,
              "reviewer": ids["zxiiro"],
              "message": "Looks like not all versions of awk have -e. I\u0027ll try without -e and see if it still works.",
              "patchSetTimestamp": 1534472821000
            },
            {
              "file": "shell/openstack-protect-in-use-images.sh",
              "line": 27,
              "reviewer": ids["zxiiro"],
              "message": "Done",
              "patchSetTimestamp": 1534472821000
            }
          ],
          "sizeInsertions": 202,
          "sizeDeletions": 0
        },
        {
          "number": 10,
          "revision": "d7b9a7cbd308d3d7d0174b5556ef6a53c744cf26",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/89/12089/10",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534557169000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1534784723000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1534784724000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1534557730000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1534912772000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534559053000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 204,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I0628cb5c7185e2143e448ceb4fa4752384581a5e",
      "commitNumber": 12318,
      "subject": "Add option to stage to Maven Central",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12318",
      "commitMessage": "Add option to stage to Maven Central\n\nProvide an option to also stage to OSSRH in preparation to release\nto Maven Central.\n\nIn addition to printing the staging repo-id also print the URL to\nthe staging repo for convenience in stage-repo.txt.\n\nNOTE: This patch introduces a breaking change to\n      lf-infra-maven-parameters to introduce a new boolean parameter\n      mvn-central. Job templates using this macro will need to add\n      \u0027mvn-central: false\u0027 to their list of passed parameters.\n\nIssue: https://jira.opendaylight.org/browse/RELENG-28\nChange-Id: I0628cb5c7185e2143e448ceb4fa4752384581a5e\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534611026000,
      "lastUpdatedDate": 1534872533000,
      "isOpen": true,
      "status": "NEW",
      "reviewers": [
        ids["lf-jenkins"],
        ids["rovarga"],
        ids["vorburger"],
        ids["zxiiro"],
        ids["agrimberg"]
      ],
      "comments": [
        {
          "timestamp": 1534611026000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534611095000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/716/"
        },
        {
          "timestamp": 1534611230000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/716/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/716/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/716"
        },
        {
          "timestamp": 1534611403000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1534611505000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/717/"
        },
        {
          "timestamp": 1534611661000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/717/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/717"
        },
        {
          "timestamp": 1534611835000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1534612068000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/718/"
        },
        {
          "timestamp": 1534612216000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/718/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/718"
        },
        {
          "timestamp": 1534613078000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4: Commit message was updated."
        },
        {
          "timestamp": 1534613134000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4: Code-Review-1\n\n(2 comments)"
        },
        {
          "timestamp": 1534613157000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/719/"
        },
        {
          "timestamp": 1534613322000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/719/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/719"
        },
        {
          "timestamp": 1534614761000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1534614857000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 5: Code-Review-2\n\nMy comments above should be addressed but additionally it looks like OSSRH will fail your staging repo if you are missing:\n\n1. source.jars\n2. javadoc.jars\n3. gpg signatures\n\nItem\u0027s 1 \u0026 2 are good for. Item 3 we need to get Sigul in place to automate this process."
        },
        {
          "timestamp": 1534614965000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/720/"
        },
        {
          "timestamp": 1534615136000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/720/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/720"
        },
        {
          "timestamp": 1534620082000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 5: Code-Review-1\n\n(2 comments)"
        },
        {
          "timestamp": 1534872533000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 5:\n\n(1 comment)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "1d428aba011436628e4542b483a6f97250f23cb1",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/18/12318/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534611026000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1534611230000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 21,
          "sizeDeletions": -6
        },
        {
          "number": 2,
          "revision": "58f08491b03a624c9be6a84096c5b23f4d17409d",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/18/12318/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534611403000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534611661000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 23,
          "sizeDeletions": -6
        },
        {
          "number": 3,
          "revision": "03b3e986b9b8bb0636d747f3bb2fc538f48e3a97",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/18/12318/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534611835000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534612216000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 30,
          "sizeDeletions": -7
        },
        {
          "number": 4,
          "revision": "8ba8da20fa5e7714cebded68f2082038b478a6ae",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/18/12318/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534613078000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1534613134000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534613322000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 18,
              "reviewer": ids["zxiiro"],
              "message": "Maybe instead of forcing this on everyone. We should make it apply only to the staging job.",
              "patchSetTimestamp": 1534613078000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 134,
              "reviewer": ids["zxiiro"],
              "message": "need to make sure we document this in the RST files.",
              "patchSetTimestamp": 1534613078000
            }
          ],
          "sizeInsertions": 30,
          "sizeDeletions": -7
        },
        {
          "number": 5,
          "revision": "408fc151bf74ae36e1610e3b7c20ad33898f49cb",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/18/12318/5",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534614761000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1534620082000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -2,
              "grantedOnDate": 1534614857000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534615136000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/maven-stage.sh",
              "line": 37,
              "reviewer": ids["agrimberg"],
              "message": "This is hard coding a Maven Central Nexus staging ID. I would expect that we should be ending up with a different ID per project that we setup for Maven Central push",
              "patchSetTimestamp": 1534614761000
            },
            {
              "file": "shell/maven-stage.sh",
              "line": 37,
              "reviewer": ids["zxiiro"],
              "message": "Yep this is the generic Profile ID that every OSSRH account get\u0027s access to. I was waiting for confirmation from the admins to see if we get our own special Profile ID or not.\n\nThe answer is yes we do so we\u0027ll need to make this configurable.",
              "patchSetTimestamp": 1534614761000
            },
            {
              "file": "shell/maven-stage.sh",
              "line": 41,
              "reviewer": ids["agrimberg"],
              "message": "This is the same as lines 25 - 32 just with some different parameters. as such, I think that lines 25 - 32 should be functionalized and then called with the needed parameters.",
              "patchSetTimestamp": 1534614761000
            }
          ],
          "sizeInsertions": 36,
          "sizeDeletions": -8
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I76db9d6146228180c9af3f06780705dac33b7899",
      "commitNumber": 12344,
      "subject": "Set permit-all true for all jobs",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12344",
      "commitMessage": "Set permit-all true for all jobs\n\nWe need this set for all jobs otherwise GHPR will spam GitHub.\nThis was set for verify jobs but the merge jobs did not have them.\n\nChange-Id: I76db9d6146228180c9af3f06780705dac33b7899\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534869998000,
      "lastUpdatedDate": 1534870591000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["jeremyphelps"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1534869998000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534870304000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1534870362000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1534870445000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/727/"
        },
        {
          "timestamp": 1534870578000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/727/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/727"
        },
        {
          "timestamp": 1534870591000,
          "reviewer": ids["jeremyphelps"],
          "message": "Change has been successfully merged by Jeremy Phelps"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "33acf6e113cf0f9fa8ce4bfa1df9df5473c28c41",
          "parents": [
            "d53f21f3662ca552b586a3ed8371b14955457b4e"
          ],
          "ref": "refs/changes/44/12344/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534869998000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1534870304000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1534870362000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1534870591000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534870578000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 6,
          "sizeDeletions": -6
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I30a00f1c92f7714f7ac8a308d12a6181fe4547cd",
      "commitNumber": 12326,
      "subject": "Require IMAGE_NAME and HARDWARE_ID",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12326",
      "commitMessage": "Require IMAGE_NAME and HARDWARE_ID\n\nIMAGE_NAME had HARDWARE_ID are required settings so clearly mark\nthem as so instead of mentioning the default setting.\n\nChange-Id: I30a00f1c92f7714f7ac8a308d12a6181fe4547cd\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534778665000,
      "lastUpdatedDate": 1534784449000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["tijohnson"]
      ],
      "comments": [
        {
          "timestamp": 1534778665000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534778691000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1534778797000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/307/ (1/2)"
        },
        {
          "timestamp": 1534778846000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/726/ (2/2)"
        },
        {
          "timestamp": 1534778995000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/307/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/307\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/726/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/726"
        },
        {
          "timestamp": 1534784447000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1534784449000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "40baa00e9dfc838fd7f8b47b5906158a7c6f4d85",
          "parents": [
            "05d39da965b282ab4d950fe519834ad31996286a"
          ],
          "ref": "refs/changes/26/12326/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534778665000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1534784447000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1534784449000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1534778691000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534778995000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 3,
          "sizeDeletions": -2
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "If0dda88ff24da7fd171484c37855f33b05f36553",
      "commitNumber": 12293,
      "subject": "Add job to verify upstream global-jjb patches",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12293",
      "commitMessage": "Add job to verify upstream global-jjb patches\n\nAdd job that can be used by downstream projects to report upstream\nto global-jjb patches when a proposed patch breaks their project.\n\nThis job sets -1 CR only and does not block the upstream patch as\nthere are cases where we may want to break backwards compatibility\non purpose. This job\u0027s purpose is to give us a clear view when it\ndoes happen.\n\nChange-Id: If0dda88ff24da7fd171484c37855f33b05f36553\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534465557000,
      "lastUpdatedDate": 1534781948000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["odl-jobbuilder"],
        ids["agrimberg"]
      ],
      "comments": [
        {
          "timestamp": 1534465557000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534553237000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nrecheck"
        },
        {
          "timestamp": 1534553316000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/1/ (1/2)"
        },
        {
          "timestamp": 1534553325000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/699/ (2/2)"
        },
        {
          "timestamp": 1534553486000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/1/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/1/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/1\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/699/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/699/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/699"
        },
        {
          "timestamp": 1534553503000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nrecheck"
        },
        {
          "timestamp": 1534553589000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/700/ (1/2)"
        },
        {
          "timestamp": 1534553591000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 1: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/2/ (2/2)"
        },
        {
          "timestamp": 1534553740000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/2/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/2/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/2\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/700/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/700/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/700"
        },
        {
          "timestamp": 1534554081000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nrecheck"
        },
        {
          "timestamp": 1534554110000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/701/ (1/2)"
        },
        {
          "timestamp": 1534554245000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 1: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/3/ (2/2)"
        },
        {
          "timestamp": 1534554284000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 1: Code-Review-1 Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/3/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/3/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/3\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/701/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/701/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/701"
        },
        {
          "timestamp": 1534554885000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nrecheck"
        },
        {
          "timestamp": 1534554956000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 1: -Code-Review -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/4/ (1/2)"
        },
        {
          "timestamp": 1534554965000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/702/ (2/2)"
        },
        {
          "timestamp": 1534555124000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 1: Code-Review-1 Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/4/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/4/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/4\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/702/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/702/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/702"
        },
        {
          "timestamp": 1534555229000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1534555296000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/5/ (1/3)"
        },
        {
          "timestamp": 1534555305000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/298/ (2/3)"
        },
        {
          "timestamp": 1534555365000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/703/ (3/3)"
        },
        {
          "timestamp": 1534556283000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 2:\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/5/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/5\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/298/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/298\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/703/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/703"
        },
        {
          "timestamp": 1534556537000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\nODL Jenkins needs permissions to vote I think."
        },
        {
          "timestamp": 1534556751000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1534556824000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/301/ (1/3)"
        },
        {
          "timestamp": 1534556880000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/706/ (2/3)"
        },
        {
          "timestamp": 1534556968000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/8/ (3/3)"
        },
        {
          "timestamp": 1534558179000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/301/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/301\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/706/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/706\n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/8/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/8"
        },
        {
          "timestamp": 1534558796000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\nrecheck"
        },
        {
          "timestamp": 1534558935000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/304/ (1/2)"
        },
        {
          "timestamp": 1534558949000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/710/ (2/2)"
        },
        {
          "timestamp": 1534559090000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/304/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/304\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/710/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/710"
        },
        {
          "timestamp": 1534606008000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review+1"
        },
        {
          "timestamp": 1534779247000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 3:\n\n(1 comment)"
        },
        {
          "timestamp": 1534781737000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\n(1 comment)"
        },
        {
          "timestamp": 1534781947000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1534781948000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "5a7ace954ffa0734c4ce060f535f355d16df9e45",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/93/12293/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534465557000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1534555124000,
              "grantedBy": ids["odl-jobbuilder"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1534555124000,
              "grantedBy": ids["odl-jobbuilder"]
            }
          ],
          "comments": [],
          "sizeInsertions": 70,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "7b745a6b694b52eb54afc6730917a381b3bcdf8c",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/93/12293/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534555229000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 107,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "e9a058af2478d5b0927429955022b1a56aef9fdd",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/93/12293/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534556751000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1534781947000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1534781948000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1534606008000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534559090000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "docs/jjb/lf-ci-jobs.rst",
              "line": 461,
              "reviewer": ids["agrimberg"],
              "message": "I\u0027m assuming that there is no github version of this because global-jjb is purely a Gerrit based project and all the downstreams will have to be watching the Gerrit stream on the LF Gerrit?",
              "patchSetTimestamp": 1534556751000
            },
            {
              "file": "docs/jjb/lf-ci-jobs.rst",
              "line": 461,
              "reviewer": ids["zxiiro"],
              "message": "Yeah I didn\u0027t want to force non-Gerrit projects to suddenly require Gerrit Trigger. If someone requests it we could add it in the future however I think we\u0027ll get good enough coverage by monitoring our Gerrit based projects at least.",
              "patchSetTimestamp": 1534556751000
            }
          ],
          "sizeInsertions": 107,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I8c606002bc4ca187b56514d65aa39919a6c6e74b",
      "commitNumber": 12309,
      "subject": "Remove mvn-settings requirement from jjb job docs",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12309",
      "commitMessage": "Remove mvn-settings requirement from jjb job docs\n\nThese jobs do not use that setting.\n\nChange-Id: I8c606002bc4ca187b56514d65aa39919a6c6e74b\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534556287000,
      "lastUpdatedDate": 1534779413000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["odl-jobbuilder"]
      ],
      "comments": [
        {
          "timestamp": 1534556287000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534556370000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/6/ (1/3)"
        },
        {
          "timestamp": 1534556416000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/299/ (2/3)"
        },
        {
          "timestamp": 1534556505000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/704/ (3/3)"
        },
        {
          "timestamp": 1534557562000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 1:\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/6/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/6\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/299/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/299\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/704/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/704"
        },
        {
          "timestamp": 1534558812000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nrecheck"
        },
        {
          "timestamp": 1534558984000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/306/ (1/2)"
        },
        {
          "timestamp": 1534559003000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/713/ (2/2)"
        },
        {
          "timestamp": 1534559152000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/306/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/306\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/713/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/713"
        },
        {
          "timestamp": 1534606000000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1534779412000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1534779413000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "5ead957979aff73609c8167182d09f699ffa206e",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/09/12309/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534556287000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1534779412000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1534779413000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1534606000000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534559152000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 0,
          "sizeDeletions": -4
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I58fe4c43c851cd9e61ddec847529b0dcb91e0af1",
      "commitNumber": 12319,
      "subject": "Refactor staging-profile-id out of mvn-parameters",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12319",
      "commitMessage": "Refactor staging-profile-id out of mvn-parameters\n\nThis was originally a bad design decision. We should not be forcing\nstaging-profile-id variable against all users of\nlf-infra-maven-parameters when only the staging job needs it.\n\nThis patch moves custom parameter definitions to the maven-stage job\nand removes staging-profile-id requirement from all other jobs.\n\nChange-Id: I58fe4c43c851cd9e61ddec847529b0dcb91e0af1\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534625217000,
      "lastUpdatedDate": 1534778945000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1534625217000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534625299000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/721/"
        },
        {
          "timestamp": 1534625459000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/721/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/721"
        },
        {
          "timestamp": 1534778937000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1534778945000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "8421dadca27173dda6df59cb71c5ba82d4e86e65",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/19/12319/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534625217000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1534778937000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1534778945000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534625459000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 20,
          "sizeDeletions": -20
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I50a3f27396fc921714d1faff16830b2e6b38730d",
      "commitNumber": 12320,
      "subject": "Make staging jobs run daily",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12320",
      "commitMessage": "Make staging jobs run daily\n\nAs we move towards more automated releases having regularly running\nstaging jobs will allow projects to discover broken staging jobs\nearlier. Let\u0027s run these jobs @daily as a default.\n\nChange-Id: I50a3f27396fc921714d1faff16830b2e6b38730d\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534625624000,
      "lastUpdatedDate": 1534778851000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1534625624000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534625704000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/722/"
        },
        {
          "timestamp": 1534625863000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/722/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/722"
        },
        {
          "timestamp": 1534778850000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1534778851000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "e1382a101a5bf19dacc7502b62af8f5188b73b64",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/20/12320/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534625624000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1534778850000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1534778851000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534625863000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 4,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I7ac17b3b4b8729d0f143fb15c71143c3de1ac461",
      "commitNumber": 12321,
      "subject": "Make maven-merge jobs run daily",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12321",
      "commitMessage": "Make maven-merge jobs run daily\n\nBack when OpenDaylight was on Rackspace we were trying to cut back\non how often jobs run due to the infra being unstable and at the\ntime thought the maven-integration job and maven-merge jobs were\npart of the problem. Since we moved to Vexxhost infra has been\nsignificantly more stable and not as big a concern. Let\u0027s run\nthe maven-merge jobs on a daily basis so that project artifacts\nhave more chances to pass before the 3 week SNAPSHOT clearing\ncron that\u0027s run in Nexus.\n\nChange-Id: I7ac17b3b4b8729d0f143fb15c71143c3de1ac461\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534625776000,
      "lastUpdatedDate": 1534778800000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1534625776000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534625875000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/723/"
        },
        {
          "timestamp": 1534626014000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/723/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/723"
        },
        {
          "timestamp": 1534778799000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1534778800000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "41d5d680467ade60b9d936b048fed4bb76544906",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/21/12321/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534625776000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1534778799000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1534778800000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534626014000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 2,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Ia07cb6b437e6e2107b8301d52f72aa3cace112da",
      "commitNumber": 12310,
      "subject": "Document the jjb-version variable",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12310",
      "commitMessage": "Document the jjb-version variable\n\nChange-Id: Ia07cb6b437e6e2107b8301d52f72aa3cace112da\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534556409000,
      "lastUpdatedDate": 1534778310000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["odl-jobbuilder"]
      ],
      "comments": [
        {
          "timestamp": 1534556409000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534556565000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/300/ (1/3)"
        },
        {
          "timestamp": 1534556598000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/7/ (2/3)"
        },
        {
          "timestamp": 1534556601000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/705/ (3/3)"
        },
        {
          "timestamp": 1534557667000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 1:\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/7/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/7\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/300/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/300\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/705/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/705"
        },
        {
          "timestamp": 1534558807000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nrecheck"
        },
        {
          "timestamp": 1534558969000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/305/ (1/2)"
        },
        {
          "timestamp": 1534558981000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/712/ (2/2)"
        },
        {
          "timestamp": 1534559135000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/305/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/305\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/712/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/712"
        },
        {
          "timestamp": 1534605994000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1534778309000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1534778310000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "7255eaaa4f73e7867f0a64199b5b45cb92e8fbfc",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/10/12310/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534556409000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1534778309000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1534778310000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1534605994000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534559135000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 2,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I48182a1d5d5c3cf4d42249bfc8a55b7c0088ec36",
      "commitNumber": 12314,
      "subject": "Allow unbound variables in sigul scripts",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12314",
      "commitMessage": "Allow unbound variables in sigul scripts\n\nThese scripts as they are designed expect unbound variables so\nenable them at least until they are fixed.\n\nChange-Id: I48182a1d5d5c3cf4d42249bfc8a55b7c0088ec36\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534559453000,
      "lastUpdatedDate": 1534778236000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1534559453000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534559534000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/715/"
        },
        {
          "timestamp": 1534559679000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/715/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/715"
        },
        {
          "timestamp": 1534605975000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1534778157000,
          "reviewer": ids["agrimberg"],
          "message": "Topic set to sigul"
        },
        {
          "timestamp": 1534778191000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1534778236000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "af33417ec2d14bdf5a3b9a67d227f8909a7e1598",
          "parents": [
            "2ef6606863357187370d1aaed2b5bb729a49bfeb"
          ],
          "ref": "refs/changes/14/12314/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534559453000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1534778191000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1534778236000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1534605975000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534559679000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 2,
          "sizeDeletions": -3
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I7af376c3c4ce1e2cd41ca4842e5042728cdafb69",
      "commitNumber": 12313,
      "subject": "Use include-raw instead of escape for sigul macros",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12313",
      "commitMessage": "Use include-raw instead of escape for sigul macros\n\nThese macros are not using any substitutions so are hitting\nthe bug that inserts curly braces.\n\nChange-Id: I7af376c3c4ce1e2cd41ca4842e5042728cdafb69\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534559073000,
      "lastUpdatedDate": 1534778236000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1534559073000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534559208000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/714/"
        },
        {
          "timestamp": 1534559387000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/714/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/714"
        },
        {
          "timestamp": 1534605982000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1534778200000,
          "reviewer": ids["agrimberg"],
          "message": "Topic set to sigul"
        },
        {
          "timestamp": 1534778217000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1534778236000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "2ef6606863357187370d1aaed2b5bb729a49bfeb",
          "parents": [
            "0bb231c3aab67fc88e599aefbb2192c0bf70cac1"
          ],
          "ref": "refs/changes/13/12313/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534559073000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1534778217000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1534778236000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1534605982000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534559387000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 3,
          "sizeDeletions": -3
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I8a75a63a577500783d7a5f22f1833a2f6451f3d5",
      "commitNumber": 12311,
      "subject": "Fix typo in lf-sigual-install builders syntax",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12311",
      "commitMessage": "Fix typo in lf-sigual-install builders syntax\n\nChange-Id: I8a75a63a577500783d7a5f22f1833a2f6451f3d5\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534558460000,
      "lastUpdatedDate": 1534778236000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1534558460000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534558534000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/708/ (1/2)"
        },
        {
          "timestamp": 1534558645000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/10/ (2/2)"
        },
        {
          "timestamp": 1534558735000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Code-Review-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/10/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/10/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/10\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/708/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/708"
        },
        {
          "timestamp": 1534558802000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nrecheck"
        },
        {
          "timestamp": 1534558965000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: -Code-Review\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/711/"
        },
        {
          "timestamp": 1534559119000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/711/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/711"
        },
        {
          "timestamp": 1534605988000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1534778223000,
          "reviewer": ids["agrimberg"],
          "message": "Topic set to sigul"
        },
        {
          "timestamp": 1534778234000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1534778236000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "0bb231c3aab67fc88e599aefbb2192c0bf70cac1",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/11/12311/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534558460000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1534778234000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1534778236000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1534605988000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534559119000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I2229d66f637bd5aab203a3bbf12aa1e677a471a1",
      "commitNumber": 12122,
      "subject": "Add Jenkins Sandbox Cleanup job",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12122",
      "commitMessage": "Add Jenkins Sandbox Cleanup job\n\nThis cleanup job runs weekly on Saturdays to clear out Sandbox\njobs and views from the system.\n\nThe benefit of this is that it uses the same version of JJB as\nthe other CI jobs whereas the traditional cron job we put in puppet\ndoes not often get updated to match the right version.\n\nIssue: RELENG-1118\nChange-Id: I2229d66f637bd5aab203a3bbf12aa1e677a471a1\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1533414562000,
      "lastUpdatedDate": 1533859346000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["shague"],
        ids["lf-jenkins"],
        ids["dfarrell07"],
        ids["jluhrsen"],
        ids["jeremyphelps"]
      ],
      "comments": [
        {
          "timestamp": 1533414562000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1533414636000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/293/ (1/2)"
        },
        {
          "timestamp": 1533414684000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/687/ (2/2)"
        },
        {
          "timestamp": 1533414875000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/687/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/687/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/687\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/293/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/293"
        },
        {
          "timestamp": 1533570613000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1:\n\nI\u0027m really on the fence with this change. It only solves 1/2 of the configuration problem. That of the Jenkins jobs. It does nothing for the Nexus side for clearing out the job logs that exist in the sandbox holding area which continues to have to be a cron job."
        },
        {
          "timestamp": 1533574810000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n\u003e I\u0027m really on the fence with this change. It only solves 1/2 of the\n \u003e configuration problem. That of the Jenkins jobs. It does nothing\n \u003e for the Nexus side for clearing out the job logs that exist in the\n \u003e sandbox holding area which continues to have to be a cron job.\n\nTo be fair the Nexus side is a completely separate step. Even if we ignore this job. It required modifying 2 separate puppet files. One for Jenkins and one for Nexus. Irrespective of this patch it was still a 2 step process previously too. This reduces the steps to 1 but does bring up a point that we need to document the Nexus part in our infrastructure docs."
        },
        {
          "timestamp": 1533651337000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1533651424000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/294/ (1/2)"
        },
        {
          "timestamp": 1533651444000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/689/ (2/2)"
        },
        {
          "timestamp": 1533651590000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/294/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/294\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/689/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/689"
        },
        {
          "timestamp": 1533851963000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1533859329000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1533859346000,
          "reviewer": ids["jeremyphelps"],
          "message": "Change has been successfully merged by Jeremy Phelps"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "7ca8d2677a2b1c8738d676feaa776240e878dc9c",
          "parents": [
            "78f0bd978eeadea71fdc31e16de4cc4b8e769b48"
          ],
          "ref": "refs/changes/22/12122/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533414562000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1533414875000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 105,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "1eda455b5c9e28a98441ddd46a61035dd5f60fe6",
          "parents": [
            "8a5ed774fd2f4109ff9fe6da4359263dc3a1ab29"
          ],
          "ref": "refs/changes/22/12122/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533651337000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1533851963000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1533859329000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1533859346000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1533651590000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 97,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I0dd4342664251386ddc7eca52df56156105f200d",
      "commitNumber": 9927,
      "subject": "Rename maven-release job to maven-stage",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/9927",
      "commitMessage": "Rename maven-release job to maven-stage\n\nATTENTION: This is a breaking change. The trigger word\n\"build release$\" is changed to \"stage-release$\" to better\nreflect what this job is actually doing.\n\nIn preparation for work on RELENG-425 this change renames the\nmaven-release jobs to maven-stage job to better reflect what the\njob really does.\n\nTrigger keyword was also changed to \"stage-release$\"\n\nIssue: RELENG-425\nChange-Id: I0dd4342664251386ddc7eca52df56156105f200d\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1523479918000,
      "lastUpdatedDate": 1533858637000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["askb"],
        ids["jwagantall"],
        ids["jeremyphelps"],
        ids["rovarga"],
        ids["agrimberg"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1523479918000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1523479959000,
          "reviewer": ids["zxiiro"],
          "message": "Topic set to RELENG-425"
        },
        {
          "timestamp": 1523481016000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1523857395000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1524189687000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 1: Code-Review-1\n\n(2 comments)"
        },
        {
          "timestamp": 1524189746000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 1:\n\nMy documentation comment is more optional if you guys agree.. but just the correction in lf-maven-jobs needs to be done."
        },
        {
          "timestamp": 1524239560000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1524243249000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1524665329000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n(2 comments)"
        },
        {
          "timestamp": 1524665342000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1525290278000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1533220941000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 2:\n\n\u003e (2 comments)\n\nAre we still planning on this?  I think it\u0027s a good idea."
        },
        {
          "timestamp": 1533222674000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\nYep. I was holding this off for a valid release job but maybe we should just go ahead and release this. I\u0027ll rebase this and resubmit."
        },
        {
          "timestamp": 1533222763000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3: Patch Set 2 was rebased."
        },
        {
          "timestamp": 1533222832000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 3: Code-Review+1\n\nOthers to review since it is a breaking change."
        },
        {
          "timestamp": 1533222898000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/292/ (1/2)"
        },
        {
          "timestamp": 1533222953000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/686/ (2/2)"
        },
        {
          "timestamp": 1533223027000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 3: Code-Review+1\n\nI\u0027m fine with this. The only reason we don\u0027t need to go bumping the major for global-jjb is due to us not having actually released a 1.x series yet!\n\nI\u0027m thinking we probably should do so in the not so distant future"
        },
        {
          "timestamp": 1533223120000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/292/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/292\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/686/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/686"
        },
        {
          "timestamp": 1533519608000,
          "reviewer": ids["askb"],
          "message": "Patch Set 3: Code-Review+1"
        },
        {
          "timestamp": 1533851915000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1533851933000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\nI\u0027d like to land this for the next global-jjb release."
        },
        {
          "timestamp": 1533858619000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 3: Code-Review+2\n\nJust need to be sure to include this is a breaking change."
        },
        {
          "timestamp": 1533858637000,
          "reviewer": ids["jeremyphelps"],
          "message": "Change has been successfully merged by Jeremy Phelps"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "a690e8897a20db81b31341e74b6ccea3e0be6a75",
          "parents": [
            "42bccf5db0da3fd0b900a3c508988d992b1fecc2"
          ],
          "ref": "refs/changes/27/9927/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1523479918000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1523857395000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1524189687000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1523481016000,
              "grantedBy": ids["jeremyphelps"]
            }
          ],
          "comments": [
            {
              "file": "docs/jjb/lf-maven-jobs.rst",
              "line": 264,
              "reviewer": ids["jwagantall"],
              "message": "Can we add to this documentation that the repo created has the format \"autorelase-####\"? Just to be more specific.",
              "patchSetTimestamp": 1523479918000
            },
            {
              "file": "docs/jjb/lf-maven-jobs.rst",
              "line": 264,
              "reviewer": ids["zxiiro"],
              "message": "In odl every project has a different repo name.\n\nautorelease-#### is for the autorelease project.\nodlparent-#### is for the odlparent project.\nyangtools-#### is for the yangtools project.\n\netc...\n\nI can add details that it will be in the format [a-z]+-[0-9][0-9][0-9][0-9].",
              "patchSetTimestamp": 1523479918000
            },
            {
              "file": "docs/jjb/lf-maven-jobs.rst",
              "line": 264,
              "reviewer": ids["jwagantall"],
              "message": "Oh, I didn\u0027t realized that was the case for different projects. Yes please.. let\u0027s add the expected format",
              "patchSetTimestamp": 1523479918000
            },
            {
              "file": "docs/jjb/lf-maven-jobs.rst",
              "line": 264,
              "reviewer": ids["zxiiro"],
              "message": "Done",
              "patchSetTimestamp": 1523479918000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 682,
              "reviewer": ids["jwagantall"],
              "message": "lf_maven_stage",
              "patchSetTimestamp": 1523479918000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 682,
              "reviewer": ids["zxiiro"],
              "message": "Done",
              "patchSetTimestamp": 1523479918000
            }
          ],
          "sizeInsertions": 22,
          "sizeDeletions": -22
        },
        {
          "number": 2,
          "revision": "4e1a2815be2952983293f6867e5231eed91e463c",
          "parents": [
            "bfe91be03d516a56adb74abd1e16c50b86c27c6e"
          ],
          "ref": "refs/changes/27/9927/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1524665342000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1525290278000,
              "grantedBy": ids["jwagantall"]
            }
          ],
          "comments": [],
          "sizeInsertions": 28,
          "sizeDeletions": -25
        },
        {
          "number": 3,
          "revision": "32363c61de3ae1fa4bf31fe17327bc153da3e897",
          "parents": [
            "356637f0d3d4091aecde9889c1bc9ec758a33336"
          ],
          "ref": "refs/changes/27/9927/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533222763000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1533223027000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1533851915000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1533519608000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1533858619000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1533858637000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1533223120000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 28,
          "sizeDeletions": -25
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I1a181776c6d0eef1b857ede9099d3ebb8e3ba98d",
      "commitNumber": 12165,
      "subject": "Test with latest JJB and supported JJB",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12165",
      "commitMessage": "Test with latest JJB and supported JJB\n\nTest global-jjb with both the latest version of JJB as well as the\nglobal-jjb supported version of JJB.\n\nAlso include a script to ensure that jjb/lf-ci-jobs.yaml and tox.ini\ndefine the same supported versions of JJB.\n\nChange-Id: I1a181776c6d0eef1b857ede9099d3ebb8e3ba98d\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1533770936000,
      "lastUpdatedDate": 1533858546000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["jeremyphelps"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1533770936000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1533771028000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/691/"
        },
        {
          "timestamp": 1533771184000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/691/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/691"
        },
        {
          "timestamp": 1533851946000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1533858544000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1533858546000,
          "reviewer": ids["jeremyphelps"],
          "message": "Change has been successfully merged by Jeremy Phelps"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "775ab31f7fc1d6ce40c3057f5a51ced9cb191267",
          "parents": [
            "3ae312fbcced7c547bbe98a5692a6d2dcfc17558"
          ],
          "ref": "refs/changes/65/12165/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533770936000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1533851946000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1533858544000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1533858546000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1533771184000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 60,
          "sizeDeletions": -2
        }
      ]
    }
  ],
  "addedAsReviewerTo": [
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "Iff800472cecfe056285f07e1c2461775457cb0ab",
      "commitNumber": 12382,
      "subject": "Enable or disable Jenkins jobs matching regex",
      "owner": ids["askb"],
      "url": "https://gerrit.linuxfoundation.org/infra/12382",
      "commitMessage": "Enable or disable Jenkins jobs matching regex\n\nex:\nTo enable jobs\n\nTo disable jobs\n\nJIRA: RELENG-1117\nChange-Id: Iff800472cecfe056285f07e1c2461775457cb0ab\nSigned-off-by: Anil Belur \u003cabelur@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535084726000,
      "lastUpdatedDate": 1535389389000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["askb"]
      ],
      "comments": [
        {
          "timestamp": 1535084726000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535084924000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 2: Commit message was updated."
        },
        {
          "timestamp": 1535084976000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/257/"
        },
        {
          "timestamp": 1535085027000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/258/"
        },
        {
          "timestamp": 1535085217000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/257/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/257/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/257"
        },
        {
          "timestamp": 1535085240000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/258/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/258/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/258"
        },
        {
          "timestamp": 1535085876000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review-1\n\n(2 comments)\n\n`lftools jenkins enable-disable-jobs` is kind of clunky as a user experience.\n\nI think using \"jobs\" as a verb with commands under it makes more sense, kind of link how \"nodes\" has the subcommand list.\n\n lftools jenkins jobs enable REGEX\n lftools jenkins jobs disable REGEX\n\nThe groovy code can be stored as a global variable that\u0027s used by both functions so that there\u0027s no duplication."
        },
        {
          "timestamp": 1535086042000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\n(1 comment)"
        },
        {
          "timestamp": 1535091268000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1535091485000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/260/"
        },
        {
          "timestamp": 1535091698000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/260/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/260/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/260"
        },
        {
          "timestamp": 1535091883000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1535092049000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/261/"
        },
        {
          "timestamp": 1535092271000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/261/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/261"
        },
        {
          "timestamp": 1535092914000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4: Code-Review-1\n\nI still think developing this as a \"jobs\" verb would be a lot better from a usability perspective. It also allows us to add additional \"job\" related commands in the future if we ever want to do more than just enable/disable jobs. Take a look at \"nodes.py\". I think there should be 2 clear commands under jobs like:\n\n\n lftools jenkins jobs enable REGEX\n lftools jenkins jobs disable REGEX\n\nThe groovy code can be stored as a global variable that\u0027s used by both functions so that there\u0027s no duplication of the groovy script."
        },
        {
          "timestamp": 1535094198000,
          "reviewer": ids["askb"],
          "message": "Patch Set 4:\n\n\u003e I still think developing this as a \"jobs\" verb would be a lot\n \u003e better from a usability perspective. It also allows us to add\n \u003e additional \"job\" related commands in the future if we ever want to\n \u003e do more than just enable/disable jobs. Take a look at \"nodes.py\". I\n \u003e think there should be 2 clear commands under jobs like:\n \u003e \n \u003e \n \u003e lftools jenkins jobs enable REGEX\n \u003e lftools jenkins jobs disable REGEX\n \u003e \n \u003e The groovy code can be stored as a global variable that\u0027s used by\n \u003e both functions so that there\u0027s no duplication of the groovy script.\n\nagreed, will update the change. Any pointers on adding the verb? Do we need to move this into a separate file?"
        },
        {
          "timestamp": 1535286673000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1535287144000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/274/"
        },
        {
          "timestamp": 1535287387000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/274/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/274/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/274"
        },
        {
          "timestamp": 1535293757000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 6."
        },
        {
          "timestamp": 1535293987000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/275/"
        },
        {
          "timestamp": 1535294210000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/275/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/275/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/275"
        },
        {
          "timestamp": 1535294413000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 7."
        },
        {
          "timestamp": 1535294601000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/276/"
        },
        {
          "timestamp": 1535294854000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/276/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/276"
        },
        {
          "timestamp": 1535384849000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 8."
        },
        {
          "timestamp": 1535385173000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/287/"
        },
        {
          "timestamp": 1535385480000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/287/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/287"
        },
        {
          "timestamp": 1535389387000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 8: Code-Review+2"
        },
        {
          "timestamp": 1535389389000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "dd1289a05817ecef235773483b8de20ea4e8d49c",
          "parents": [
            "b383380735089719b120dd613eda4fcfa4ea55ff"
          ],
          "ref": "refs/changes/82/12382/1",
          "uploader": ids["askb"],
          "createdOnDate": 1535084726000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535085217000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 41,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "370753cfcf79784ba23bb5fc46509056b05c3006",
          "parents": [
            "b383380735089719b120dd613eda4fcfa4ea55ff"
          ],
          "ref": "refs/changes/82/12382/2",
          "uploader": ids["askb"],
          "createdOnDate": 1535084924000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1535085876000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535085240000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "lftools/cli/jenkins/__init__.py",
              "line": 170,
              "reviewer": ids["zxiiro"],
              "message": "Looks like this isn\u0027t even used at all in the code.",
              "patchSetTimestamp": 1535084924000
            },
            {
              "file": "lftools/cli/jenkins/__init__.py",
              "line": 194,
              "reviewer": ids["zxiiro"],
              "message": "We should probably give credit to the original author of this code and provide a reference to the stack overflow this comes from since it is not original work.",
              "patchSetTimestamp": 1535084924000
            },
            {
              "file": "lftools/cli/jenkins/__init__.py",
              "line": 194,
              "reviewer": ids["zxiiro"],
              "message": "Ah nevermind on this one I didn\u0027t realize it was modified since the one we used this morning.",
              "patchSetTimestamp": 1535084924000
            }
          ],
          "sizeInsertions": 41,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "7dce6a0a2229f2f361bcf081df42e82d185ef802",
          "parents": [
            "b383380735089719b120dd613eda4fcfa4ea55ff"
          ],
          "ref": "refs/changes/82/12382/3",
          "uploader": ids["askb"],
          "createdOnDate": 1535091268000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535091698000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 41,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "bd408c112bd27078b75c248305917426310d4787",
          "parents": [
            "b383380735089719b120dd613eda4fcfa4ea55ff"
          ],
          "ref": "refs/changes/82/12382/4",
          "uploader": ids["askb"],
          "createdOnDate": 1535091883000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1535092914000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535092271000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 42,
          "sizeDeletions": 0
        },
        {
          "number": 5,
          "revision": "41251843c6489eaa4612c146f640f71899823072",
          "parents": [
            "b383380735089719b120dd613eda4fcfa4ea55ff"
          ],
          "ref": "refs/changes/82/12382/5",
          "uploader": ids["askb"],
          "createdOnDate": 1535286673000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535287387000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 70,
          "sizeDeletions": 0
        },
        {
          "number": 6,
          "revision": "e8ca5d9a9ce403b7726456d6d401b409559d96c1",
          "parents": [
            "b383380735089719b120dd613eda4fcfa4ea55ff"
          ],
          "ref": "refs/changes/82/12382/6",
          "uploader": ids["askb"],
          "createdOnDate": 1535293757000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535294210000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 70,
          "sizeDeletions": 0
        },
        {
          "number": 7,
          "revision": "feb3352ca81fd19553f985ef81ac1a89b1b6a627",
          "parents": [
            "b383380735089719b120dd613eda4fcfa4ea55ff"
          ],
          "ref": "refs/changes/82/12382/7",
          "uploader": ids["askb"],
          "createdOnDate": 1535294413000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535294854000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 70,
          "sizeDeletions": 0
        },
        {
          "number": 8,
          "revision": "7d2b155ff78d52a94ada949cf85ffd17512cbc45",
          "parents": [
            "b383380735089719b120dd613eda4fcfa4ea55ff"
          ],
          "ref": "refs/changes/82/12382/8",
          "uploader": ids["askb"],
          "createdOnDate": 1535384849000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535389387000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1535389389000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535385480000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 75,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I4f4055441042d790008754bb085447f52e1c1a78",
      "commitNumber": 11558,
      "subject": "Extend lftools with scripts for ldap lookups",
      "owner": ids["agardner"],
      "url": "https://gerrit.linuxfoundation.org/infra/11558",
      "commitMessage": "Extend lftools with scripts for ldap lookups\n\nAdd 2 new commands to lftools:\n\n    - infofile\n    - ldap\n\nprereqs:\nFor ldap lookups to work you must be on the VPN and have the cert\nto get the cert: log in to any collab system and grab /etc/ipa/ca.crt\nin /etc/openldap/ldap.conf\n\nTLS_REQCERT always\nTLS_CACERTDIR /etc/openldap/certs\nTLS_CACERT /etc/openldap/certs/ca.crt\n\nTo test:\n\n1. Clone this patchset\n2. start venv\n\n   pip uninstall lftools \u0026\u0026 pip install -e .\n\nUsage:\n\n$ lftools ldap\nUsage: lftools ldap [OPTIONS] COMMAND [ARGS]...\n\n  LDAP TOOLS.\n\nCommands:\n  autocorrectinfofile  Verify INFO.yaml against LDAP group.\n  csv                  Query an Ldap server.\n  inactivecommitters   Check committer participation.\n  yaml4info            Build yaml of commiters for your INFO.yaml.\n\n$ lftools infofile\nUsage: lftools infofile [OPTIONS] COMMAND [ARGS]...\n\n  INFO.yaml TOOLS.\n\nCommands:\n  get-committers    Extract Committer info from INFO.yaml or LDAP...\n  sync-committers   Script to insert missing values from ldap...\n\nIssue: RELENG-407\nChange-Id: I4f4055441042d790008754bb085447f52e1c1a78\nSigned-off-by: Aric Gardner \u003cagardner@linuxfoundation.org\u003e\n",
      "createdOnDate": 1530040611000,
      "lastUpdatedDate": 1535120808000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["bramwelt"],
        ids["lf-jenkins"],
        ids["agrimberg"],
        ids["abaranov"],
        ids["agardner"],
        ids["askb"]
      ],
      "comments": [
        {
          "timestamp": 1530040611000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1530041032000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1530047425000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1530047712000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/117/"
        },
        {
          "timestamp": 1530047904000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/117/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/117/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/117"
        },
        {
          "timestamp": 1530056285000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 3:\n\n(1 comment)"
        },
        {
          "timestamp": 1530122057000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1530122164000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/121/"
        },
        {
          "timestamp": 1530122375000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/121/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/121/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/121"
        },
        {
          "timestamp": 1530127564000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1530127845000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/122/"
        },
        {
          "timestamp": 1530128187000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/122/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/122/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/122"
        },
        {
          "timestamp": 1530128919000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 6."
        },
        {
          "timestamp": 1530129115000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 7."
        },
        {
          "timestamp": 1530129306000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/123/"
        },
        {
          "timestamp": 1530129505000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/123/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/123/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/123"
        },
        {
          "timestamp": 1530129989000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 8."
        },
        {
          "timestamp": 1530130045000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 9: Commit message was updated."
        },
        {
          "timestamp": 1530130271000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 10."
        },
        {
          "timestamp": 1530130281000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/124/"
        },
        {
          "timestamp": 1530130490000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/124/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/124/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/124"
        },
        {
          "timestamp": 1530231898000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 11."
        },
        {
          "timestamp": 1530232203000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 11:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/125/"
        },
        {
          "timestamp": 1530232343000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 12."
        },
        {
          "timestamp": 1530232371000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 11: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/125/ : ABORTED\n\nFile lftools/cli/parseinfofile.py is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/125/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/125"
        },
        {
          "timestamp": 1530232596000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 13."
        },
        {
          "timestamp": 1530232610000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 13:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/126/"
        },
        {
          "timestamp": 1530232821000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 13: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/126/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/126/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/126"
        },
        {
          "timestamp": 1530294687000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 14."
        },
        {
          "timestamp": 1530294738000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 14:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/129/"
        },
        {
          "timestamp": 1530294999000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 14: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/129/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/129/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/129"
        },
        {
          "timestamp": 1530295343000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 15."
        },
        {
          "timestamp": 1530295528000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 15:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/130/"
        },
        {
          "timestamp": 1530295780000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 15: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/130/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/130/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/130"
        },
        {
          "timestamp": 1530298507000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 16."
        },
        {
          "timestamp": 1530298741000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 16:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/131/"
        },
        {
          "timestamp": 1530298903000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 16: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/131/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/131/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/131"
        },
        {
          "timestamp": 1530301508000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 17."
        },
        {
          "timestamp": 1530301587000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 17:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/132/"
        },
        {
          "timestamp": 1530301796000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 17: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/132/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/132"
        },
        {
          "timestamp": 1530737816000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 18."
        },
        {
          "timestamp": 1530738107000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 18:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/139/"
        },
        {
          "timestamp": 1530738201000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 19."
        },
        {
          "timestamp": 1530738223000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 18: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/139/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/139/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/139"
        },
        {
          "timestamp": 1530738388000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 19:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/140/"
        },
        {
          "timestamp": 1530738553000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 19: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/140/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/140/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/140"
        },
        {
          "timestamp": 1530739121000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 20."
        },
        {
          "timestamp": 1530739407000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 20:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/141/"
        },
        {
          "timestamp": 1530739597000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 20: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/141/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/141/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/141"
        },
        {
          "timestamp": 1530808952000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 21."
        },
        {
          "timestamp": 1530809093000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 22."
        },
        {
          "timestamp": 1530809243000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 22:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/142/"
        },
        {
          "timestamp": 1530809477000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 22: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/142/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/142/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/142"
        },
        {
          "timestamp": 1530810620000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 23."
        },
        {
          "timestamp": 1530810705000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 23:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/143/"
        },
        {
          "timestamp": 1530810873000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 23: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/143/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/143/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/143"
        },
        {
          "timestamp": 1530811918000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 24."
        },
        {
          "timestamp": 1530812197000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 24:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/144/"
        },
        {
          "timestamp": 1530812385000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 24: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/144/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/144/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/144"
        },
        {
          "timestamp": 1530815279000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 25."
        },
        {
          "timestamp": 1530815529000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 25:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/145/"
        },
        {
          "timestamp": 1530815530000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 26."
        },
        {
          "timestamp": 1530815555000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 25: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/145/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/145/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/145"
        },
        {
          "timestamp": 1530815556000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 26:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/146/"
        },
        {
          "timestamp": 1530815701000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 26: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/146/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/146/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/146"
        },
        {
          "timestamp": 1530817028000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 27."
        },
        {
          "timestamp": 1530817296000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 27:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/147/"
        },
        {
          "timestamp": 1530817493000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 27: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/147/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/147"
        },
        {
          "timestamp": 1531180963000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 28."
        },
        {
          "timestamp": 1531181148000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 28:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/150/"
        },
        {
          "timestamp": 1531181387000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 28: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/150/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/150"
        },
        {
          "timestamp": 1531181550000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 28: Code-Review-1\n\n(5 comments)"
        },
        {
          "timestamp": 1531243076000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 29."
        },
        {
          "timestamp": 1531243336000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 29:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/151/"
        },
        {
          "timestamp": 1531243569000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 29: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/151/ : FAILURE\n\nFile shell/GrouplookupUser is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/151/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/151"
        },
        {
          "timestamp": 1531248808000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 30."
        },
        {
          "timestamp": 1531249097000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 30:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/152/"
        },
        {
          "timestamp": 1531249318000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 30: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/152/ : FAILURE\n\nFile shell/GrouplookupUser is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/152/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/152"
        },
        {
          "timestamp": 1531515261000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 31."
        },
        {
          "timestamp": 1531515546000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 31:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/178/"
        },
        {
          "timestamp": 1531515759000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 31: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/178/ : FAILURE\n\nFile shell/GrouplookupUser is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/178/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/178"
        },
        {
          "timestamp": 1531947666000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 32."
        },
        {
          "timestamp": 1531947760000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 32:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/189/"
        },
        {
          "timestamp": 1531947918000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 32: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/189/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/189/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/189"
        },
        {
          "timestamp": 1532028249000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 33."
        },
        {
          "timestamp": 1532028268000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 33:\n\n(1 comment)"
        },
        {
          "timestamp": 1532028437000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 33:\n\n(1 comment)"
        },
        {
          "timestamp": 1532028547000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 33:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/194/"
        },
        {
          "timestamp": 1532028715000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 33: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/194/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/194/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/194"
        },
        {
          "timestamp": 1532030753000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 34."
        },
        {
          "timestamp": 1532031045000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 34:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/195/"
        },
        {
          "timestamp": 1532031194000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 34: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/195/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/195/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/195"
        },
        {
          "timestamp": 1532113585000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 34:\n\nrecheck"
        },
        {
          "timestamp": 1532113689000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 34: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/198/"
        },
        {
          "timestamp": 1532113858000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 34: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/198/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/198/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/198"
        },
        {
          "timestamp": 1532368103000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 34:\n\nrecheck"
        },
        {
          "timestamp": 1532368407000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 34: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/199/"
        },
        {
          "timestamp": 1532368563000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 34: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/199/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/199/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/199"
        },
        {
          "timestamp": 1532440547000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 34:\n\nrecheck"
        },
        {
          "timestamp": 1532441297000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 34: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/201/"
        },
        {
          "timestamp": 1532441438000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 34: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/201/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/201/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/201"
        },
        {
          "timestamp": 1532566037000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 34: Code-Review-1\n\n(3 comments)\n\nCan we consistently use 4 space indents for the shell scripts so that they are easier to read?\n\nDo the ldap and info file changes need to be merged together? if not maybe we can break them out into 2 patches so that we can merge them faster / have smaller amounts of things to review.\n\nThis is fine as is too if it\u0027s too hard to do."
        },
        {
          "timestamp": 1532585365000,
          "reviewer": ids["askb"],
          "message": "Patch Set 34:\n\nrecheck"
        },
        {
          "timestamp": 1532585641000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 34: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/213/"
        },
        {
          "timestamp": 1532585847000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 34: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/213/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/213"
        },
        {
          "timestamp": 1532635275000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 35."
        },
        {
          "timestamp": 1532635380000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 35:\n\n@Thanh I would like to merge this together, the ldap script has no real value on its own."
        },
        {
          "timestamp": 1532635572000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 35:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/217/"
        },
        {
          "timestamp": 1532635783000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 35: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/217/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/217"
        },
        {
          "timestamp": 1532707297000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 35: Code-Review+1"
        },
        {
          "timestamp": 1532709797000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 35: Code-Review-1\n\n(35 comments)"
        },
        {
          "timestamp": 1533664193000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 36."
        },
        {
          "timestamp": 1533664269000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 36:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/233/"
        },
        {
          "timestamp": 1533664521000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 36: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/233/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/233"
        },
        {
          "timestamp": 1533752026000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 37."
        },
        {
          "timestamp": 1533752290000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 37:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/234/"
        },
        {
          "timestamp": 1533752401000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 38."
        },
        {
          "timestamp": 1533752425000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 37: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/234/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/234/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/234"
        },
        {
          "timestamp": 1533752439000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 38:\n\n(24 comments)"
        },
        {
          "timestamp": 1533752524000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 39."
        },
        {
          "timestamp": 1533752670000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 39:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/235/"
        },
        {
          "timestamp": 1533752689000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 39:\n\n(2 comments)"
        },
        {
          "timestamp": 1533752893000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 39: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/235/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/235"
        },
        {
          "timestamp": 1534597555000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 35:\n\n(1 comment)"
        },
        {
          "timestamp": 1534597642000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 39: Code-Review-1\n\nI\u0027d like to see that the bash functions are appropriately indented for readability."
        },
        {
          "timestamp": 1534789358000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 40."
        },
        {
          "timestamp": 1534789496000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 40:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/240/"
        },
        {
          "timestamp": 1534789741000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 40: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/240/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/240"
        },
        {
          "timestamp": 1534809564000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 35:\n\n(7 comments)"
        },
        {
          "timestamp": 1534810972000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 41."
        },
        {
          "timestamp": 1534811052000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 42."
        },
        {
          "timestamp": 1534811093000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 40:\n\n(3 comments)"
        },
        {
          "timestamp": 1534811137000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 41:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/241/"
        },
        {
          "timestamp": 1534811185000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 42:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/242/"
        },
        {
          "timestamp": 1534811321000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 41: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/241/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/241/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/241"
        },
        {
          "timestamp": 1534811401000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 42: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/242/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/242/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/242"
        },
        {
          "timestamp": 1534811532000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 43."
        },
        {
          "timestamp": 1534811591000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 35:\n\n(1 comment)"
        },
        {
          "timestamp": 1534811783000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 43:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/243/"
        },
        {
          "timestamp": 1534812007000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 43: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/243/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/243"
        },
        {
          "timestamp": 1534812025000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 44."
        },
        {
          "timestamp": 1534812257000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 44:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/244/"
        },
        {
          "timestamp": 1534812557000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 44: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/244/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/244"
        },
        {
          "timestamp": 1534814449000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 44: Code-Review-1\n\n(9 comments)\n\n@Aric, I made some minor changes but mainly updated to add the reno release notes file. Please check to make sure I didn\u0027t unintentionally break anything and review the release notes file. It should provide details on whatever an end user should know using the new tool.\n\nTake a look at https://docs.openstack.org/reno/latest/user/usage.html#editing-a-release-note for details on the release notes format and add any other fields you think might be important to add."
        },
        {
          "timestamp": 1534833148000,
          "reviewer": ids["askb"],
          "message": "Patch Set 44:\n\n(4 comments)\n\nsome initial comments, will test this and get back."
        },
        {
          "timestamp": 1534867053000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 44:\n\n(4 comments)"
        },
        {
          "timestamp": 1534877202000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 45."
        },
        {
          "timestamp": 1534877222000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 45:\n\n(6 comments)"
        },
        {
          "timestamp": 1534877465000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 45:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/245/"
        },
        {
          "timestamp": 1534877663000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 45: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/245/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/245"
        },
        {
          "timestamp": 1534887115000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 46."
        },
        {
          "timestamp": 1534887185000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 46:\n\nUpdated the docs to update the get-committers and sync-committers rename.\n\nAlso updated click command for get_committers and sync_committers to use dashes (get-committers and sync-committers) as using underscores in command names is ugly."
        },
        {
          "timestamp": 1534887245000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 46: Code-Review+1"
        },
        {
          "timestamp": 1534887308000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 46:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/246/"
        },
        {
          "timestamp": 1534887525000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 46: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/246/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/246"
        },
        {
          "timestamp": 1534888446000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 46: Code-Review+1"
        },
        {
          "timestamp": 1534967664000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 46: Code-Review+2"
        },
        {
          "timestamp": 1535120394000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 46: Code-Review+2\n\nGoing to merge this since I\u0027d like to release lftools today. Further discussion and tweaks can be taken up on the mailing list / Jira."
        },
        {
          "timestamp": 1535120808000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "ad66772385d67ed29d455cc39939f16a15cf0768",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/1",
          "uploader": ids["agardner"],
          "createdOnDate": 1530040611000,
          "author": ids["agardner"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 132,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "4661cc083a5443fc43e075822639b80fd6b0fed4",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1530041032000,
          "author": ids["agardner"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 130,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "6cf84b9491ffa59bcc1ca94df4a780fe9891e2de",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/3",
          "uploader": ids["agardner"],
          "createdOnDate": 1530047425000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530047904000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 31,
              "reviewer": ids["bramwelt"],
              "message": "here",
              "patchSetTimestamp": 1530047425000
            }
          ],
          "sizeInsertions": 128,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "55defe1f6099c386237731e1a57d523875ddc8d7",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/4",
          "uploader": ids["agardner"],
          "createdOnDate": 1530122057000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530122375000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 132,
          "sizeDeletions": 0
        },
        {
          "number": 5,
          "revision": "d7a2b99f15d64cb90ea565ae8d7815d9fbfe74f2",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/5",
          "uploader": ids["agardner"],
          "createdOnDate": 1530127564000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530128187000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 195,
          "sizeDeletions": 0
        },
        {
          "number": 6,
          "revision": "afad36fab2e57679d683188eea3f5cd57f94748d",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/6",
          "uploader": ids["agardner"],
          "createdOnDate": 1530128919000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 28,
              "reviewer": ids["zxiiro"],
              "message": "indent by 4 otherwise it\u0027s not affecting the def above. Python cares very much about indents :(",
              "patchSetTimestamp": 1530128919000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 141,
              "reviewer": ids["zxiiro"],
              "message": "These need to be spaces not tabs.",
              "patchSetTimestamp": 1530128919000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 149,
              "reviewer": ids["zxiiro"],
              "message": "Remove this.",
              "patchSetTimestamp": 1530128919000
            }
          ],
          "sizeInsertions": 214,
          "sizeDeletions": 0
        },
        {
          "number": 7,
          "revision": "c24ad9294486a72d1ad4b9a27b277ef932623a46",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/7",
          "uploader": ids["agardner"],
          "createdOnDate": 1530129115000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530129505000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 214,
          "sizeDeletions": 0
        },
        {
          "number": 8,
          "revision": "fa50468ff9f81a08176121dd83d6bfc5cc780f11",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/8",
          "uploader": ids["agardner"],
          "createdOnDate": 1530129989000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 215,
          "sizeDeletions": 0
        },
        {
          "number": 9,
          "revision": "060261733d07e7a9fc9124f3792b36ea18c4abc7",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/9",
          "uploader": ids["agardner"],
          "createdOnDate": 1530130045000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 215,
          "sizeDeletions": 0
        },
        {
          "number": 10,
          "revision": "71ff6b3ae29e61d0b06036846b14f7798683aebf",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/10",
          "uploader": ids["agardner"],
          "createdOnDate": 1530130271000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530130490000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 216,
          "sizeDeletions": 0
        },
        {
          "number": 11,
          "revision": "ee6dffb7c44e9544cae3a828034ae18c5385cb48",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/11",
          "uploader": ids["agardner"],
          "createdOnDate": 1530231898000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530232371000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 355,
          "sizeDeletions": 0
        },
        {
          "number": 12,
          "revision": "1357154a9daf358d67b8810005b07eac1b2e3a8f",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/12",
          "uploader": ids["agardner"],
          "createdOnDate": 1530232343000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 355,
          "sizeDeletions": 0
        },
        {
          "number": 13,
          "revision": "4811b39667213e166902457ba5d7dc79bab66de8",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/13",
          "uploader": ids["agardner"],
          "createdOnDate": 1530232596000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530232821000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 366,
          "sizeDeletions": 0
        },
        {
          "number": 14,
          "revision": "67ea22f82025426906a9e8eb078b2edd78cab21f",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/14",
          "uploader": ids["agardner"],
          "createdOnDate": 1530294687000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530294999000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 342,
          "sizeDeletions": 0
        },
        {
          "number": 15,
          "revision": "9f070e5d0157fed342f4ffa12ccc5c6fa41a12c8",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/15",
          "uploader": ids["agardner"],
          "createdOnDate": 1530295343000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530295780000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 353,
          "sizeDeletions": 0
        },
        {
          "number": 16,
          "revision": "3296e2647a6509fdc3cf50e8bd644649cfdb215f",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/16",
          "uploader": ids["agardner"],
          "createdOnDate": 1530298507000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530298903000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 361,
          "sizeDeletions": 0
        },
        {
          "number": 17,
          "revision": "f94f62e34379dc9537d7644601b5b509050ef264",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/17",
          "uploader": ids["agardner"],
          "createdOnDate": 1530301508000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1530301796000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 357,
          "sizeDeletions": 0
        },
        {
          "number": 18,
          "revision": "17ab39836640351ab1d595c3ebd949f0194b832c",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/18",
          "uploader": ids["agardner"],
          "createdOnDate": 1530737816000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530738223000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 451,
          "sizeDeletions": 0
        },
        {
          "number": 19,
          "revision": "fca73170c22cb36172c9395bd5b9d97cb9da181e",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/19",
          "uploader": ids["agardner"],
          "createdOnDate": 1530738201000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530738553000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 451,
          "sizeDeletions": 0
        },
        {
          "number": 20,
          "revision": "c3cb60de5a8c46858af5b5dba10aad1687671c06",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/20",
          "uploader": ids["agardner"],
          "createdOnDate": 1530739121000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530739597000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 448,
          "sizeDeletions": 0
        },
        {
          "number": 21,
          "revision": "9d65e5536e22142b83cc4e9f6ab28cd2c1830812",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/21",
          "uploader": ids["agardner"],
          "createdOnDate": 1530808952000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 466,
          "sizeDeletions": -291
        },
        {
          "number": 22,
          "revision": "844945c96b0288a516c2d0fe4b6be1a49715417f",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/22",
          "uploader": ids["agardner"],
          "createdOnDate": 1530809093000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530809477000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 466,
          "sizeDeletions": 0
        },
        {
          "number": 23,
          "revision": "65f29eeb9e224d96b57b2e100f4e56d5906650b5",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/23",
          "uploader": ids["agardner"],
          "createdOnDate": 1530810620000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530810873000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 467,
          "sizeDeletions": 0
        },
        {
          "number": 24,
          "revision": "6e47fc07a7dd9c009c73cf0d4b68e65ea6ee6205",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/24",
          "uploader": ids["agardner"],
          "createdOnDate": 1530811918000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530812385000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 457,
          "sizeDeletions": 0
        },
        {
          "number": 25,
          "revision": "2cd2cec8203e8269ceb5221072ec902217311de8",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/25",
          "uploader": ids["agardner"],
          "createdOnDate": 1530815279000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530815555000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 543,
          "sizeDeletions": 0
        },
        {
          "number": 26,
          "revision": "28baea74b56ae564ff807648a24b1b77ee5ec505",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/26",
          "uploader": ids["agardner"],
          "createdOnDate": 1530815530000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530815701000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 545,
          "sizeDeletions": 0
        },
        {
          "number": 27,
          "revision": "8240a1056302d79af15a84120a0f435642ddb7c1",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/27",
          "uploader": ids["agardner"],
          "createdOnDate": 1530817028000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1530817493000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 541,
          "sizeDeletions": 0
        },
        {
          "number": 28,
          "revision": "1b9695dc80853e0a4c52a392bfa5d7fb7cab4249",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/28",
          "uploader": ids["agardner"],
          "createdOnDate": 1531180963000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1531181550000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1531181387000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "lftools/cli/__init__.py",
              "line": 22,
              "reviewer": ids["zxiiro"],
              "message": "I think the parseinfofile and correctinfofile should be merged into a single infofile command. Something like:\n\n lftools info correct|parse [args]",
              "patchSetTimestamp": 1531180963000
            },
            {
              "file": "lftools/cli/__init__.py",
              "line": 22,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1531180963000
            },
            {
              "file": "requirements.txt",
              "line": 5,
              "reviewer": ids["zxiiro"],
              "message": "What\u0027s this providing that we cannot achieve with the regular PyYAML import?",
              "patchSetTimestamp": 1531180963000
            },
            {
              "file": "requirements.txt",
              "line": 5,
              "reviewer": ids["agardner"],
              "message": "I am reading and then writing back to the YAML files",
              "patchSetTimestamp": 1531180963000
            }
          ],
          "sizeInsertions": 590,
          "sizeDeletions": 0
        },
        {
          "number": 29,
          "revision": "aa859be1eb04df4255376283eafd200949b85f11",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/29",
          "uploader": ids["agardner"],
          "createdOnDate": 1531243076000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1531243569000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 854,
          "sizeDeletions": 0
        },
        {
          "number": 30,
          "revision": "57d39cdf98ad2c3bad6821cdb018283d5511295d",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/30",
          "uploader": ids["agardner"],
          "createdOnDate": 1531248808000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1531249318000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 874,
          "sizeDeletions": 0
        },
        {
          "number": 31,
          "revision": "66b53262e3a4c3a41d5be15e7f48eb2824b93581",
          "parents": [
            "e3fd906d098ba9c75cd16dfdca895e58b37b65b7"
          ],
          "ref": "refs/changes/58/11558/31",
          "uploader": ids["agardner"],
          "createdOnDate": 1531515261000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1531515759000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1159,
          "sizeDeletions": 0
        },
        {
          "number": 32,
          "revision": "1075f4602e033d321d68c6a7b970ec8ddf555029",
          "parents": [
            "e3fd906d098ba9c75cd16dfdca895e58b37b65b7"
          ],
          "ref": "refs/changes/58/11558/32",
          "uploader": ids["agardner"],
          "createdOnDate": 1531947666000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1531947918000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1193,
          "sizeDeletions": 0
        },
        {
          "number": 33,
          "revision": "8502142c50972e360eeacb2b5052dd1a46b1a2b2",
          "parents": [
            "e3fd906d098ba9c75cd16dfdca895e58b37b65b7"
          ],
          "ref": "refs/changes/58/11558/33",
          "uploader": ids["agardner"],
          "createdOnDate": 1532028249000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1532028715000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1227,
          "sizeDeletions": 0
        },
        {
          "number": 34,
          "revision": "54b7e2b803896741f6dca93754f147f97e40c1c4",
          "parents": [
            "e3fd906d098ba9c75cd16dfdca895e58b37b65b7"
          ],
          "ref": "refs/changes/58/11558/34",
          "uploader": ids["agardner"],
          "createdOnDate": 1532030753000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1532566037000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1532585847000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/autocorrectinfofile",
              "line": 4,
              "reviewer": ids["zxiiro"],
              "message": "2018 right? or are this imported files?",
              "patchSetTimestamp": 1532030753000
            },
            {
              "file": "shell/inactivecommitters",
              "line": 4,
              "reviewer": ids["zxiiro"],
              "message": "2018 right? or are this imported files?",
              "patchSetTimestamp": 1532030753000
            },
            {
              "file": "shell/yaml4info",
              "line": 4,
              "reviewer": ids["zxiiro"],
              "message": "2018 right? or are this imported files?",
              "patchSetTimestamp": 1532030753000
            },
            {
              "file": "shell/yaml4info",
              "line": 4,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532030753000
            }
          ],
          "sizeInsertions": 676,
          "sizeDeletions": 0
        },
        {
          "number": 35,
          "revision": "fe33c666e9adb9b0c4625c7055a31f40c1ebc4e5",
          "parents": [
            "e3fd906d098ba9c75cd16dfdca895e58b37b65b7"
          ],
          "ref": "refs/changes/58/11558/35",
          "uploader": ids["agardner"],
          "createdOnDate": 1532635275000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1532709797000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1532707297000,
              "grantedBy": ids["agardner"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1532635783000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "lftools/cli/infofile.py",
              "line": 26,
              "reviewer": ids["zxiiro"],
              "message": "If there\u0027s no envvar just don\u0027t include the definition.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 26,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 27,
              "reviewer": ids["zxiiro"],
              "message": "This doesn\u0027t look optional. I would use click.argument in this case so that you call the command as: parse FILE --params",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 27,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 28,
              "reviewer": ids["zxiiro"],
              "message": "Should this actually be a \"bool\" then? seems like that\u0027s how it\u0027s used below.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 28,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 31,
              "reviewer": ids["zxiiro"],
              "message": "LFID",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 31,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 42,
              "reviewer": ids["zxiiro"],
              "message": "Unnecessary, if lookup is [] then the for loop below won\u0027t execute anyway.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 42,
              "reviewer": ids["agardner"],
              "message": "yeah this was for some error correction i mean to add, fixed in the latest patchset",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 54,
              "reviewer": ids["zxiiro"],
              "message": "I think the if logic up here doesn\u0027t make sense.\n\n1. Full seems to take precedence over everything. So if someone says --full --id abc123, then it will loop the lookup for all results not just for the one id.\n\nThese 2 switches should be mutually exclusive right?\n\nSo if someone passes an ID then it will only print the ID of that person, otherwise use the loop to iterate over all committers.\n\nRegardless of the above statement, if someone passes --full then print all of the info, otherwise only print the id field.\n\nTo me this sounds like we need 2 sets of if-statements.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 54,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 54,
              "reviewer": ids["zxiiro"],
              "message": "Not sure this is addressed. Let me do a fresh comment on the latest change though.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 60,
              "reviewer": ids["zxiiro"],
              "message": "If there is no envvar just don\u0027t declare it.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 60,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 65,
              "reviewer": ids["zxiiro"],
              "message": "For the above 3 settings none of them are optional so I think we should use click.arguments instead so that the command becomes:\n\n correct info_file ldap_file user_id [--repo NAME]",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 65,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 67,
              "reviewer": ids["zxiiro"],
              "message": "What is the context for the repo name? is it a repo in ldap or what?",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 67,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 67,
              "reviewer": ids["zxiiro"],
              "message": "I don\u0027t think this is addressed. I still don\u0027t understand the context of the repo name?",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 69,
              "reviewer": ids["zxiiro"],
              "message": "info_file",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 69,
              "reviewer": ids["zxiiro"],
              "message": "ldap_file",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 69,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 81,
              "reviewer": ids["zxiiro"],
              "message": "info_data\n\nwould be more clear.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 81,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 81,
              "reviewer": ids["zxiiro"],
              "message": "Wasn\u0027t addressed.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 82,
              "reviewer": ids["zxiiro"],
              "message": "ldap_data would be more clear.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 82,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 82,
              "reviewer": ids["zxiiro"],
              "message": "Wasn\u0027t addressed.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 82,
              "reviewer": ids["zxiiro"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 105,
              "reviewer": ids["zxiiro"],
              "message": "committer*",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 105,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 107,
              "reviewer": ids["zxiiro"],
              "message": "I\u0027m not entirely sure what this if-statement is doing. seems like there is no code at all after it so there\u0027s nothing to break from. Did you mean to put this above the data line previously? or should it just be removed entirely?",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 107,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 109,
              "reviewer": ids["zxiiro"],
              "message": "unnecessary else statement the continue is implied since there\u0027s nothing after.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 109,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 121,
              "reviewer": ids["zxiiro"],
              "message": "Use the with open() pattern instead of f.close()",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 121,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 121,
              "reviewer": ids["zxiiro"],
              "message": "This wasn\u0027t addressed.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 121,
              "reviewer": ids["zxiiro"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 34,
              "reviewer": ids["zxiiro"],
              "message": "should be click.argument if this is not optional.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 34,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 36,
              "reviewer": ids["zxiiro"],
              "message": "What is groups? is it 1 group? or if I can pass more than 1 what\u0027s the format?\n\nI think it\u0027s a better user experience if hte command is like this:\n\n yaml4info group [...]\n\nwhere you can keep passing space separated list of groups to parse (assuming this supports passing more than 1?)",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 36,
              "reviewer": ids["agardner"],
              "message": "not sure how to do this",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 43,
              "reviewer": ids["zxiiro"],
              "message": "Would be more clear as gerrit-url",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 43,
              "reviewer": ids["agardner"],
              "message": "it doesnt seem to like -\u0027s in the option name",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 43,
              "reviewer": ids["zxiiro"],
              "message": "huh... really? odd :/",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 43,
              "reviewer": ids["zxiiro"],
              "message": "This works: \u0027--gerrit-url\u0027\n\nWhen it turns into a variable it becomes gerrit_url which is probably why you were having issues. I\u0027ve updated this in the latest patch.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 46,
              "reviewer": ids["zxiiro"],
              "message": "if these options are not actually optional I think it would be better if the format of the command was:\n\n inactivecommitters URL GROUP",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 46,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 55,
              "reviewer": ids["zxiiro"],
              "message": "GERRIT_CLONE_BASE",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 55,
              "reviewer": ids["zxiiro"],
              "message": "--gerrit-clone-base",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 57,
              "reviewer": ids["zxiiro"],
              "message": "LDAP_GROUP",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 57,
              "reviewer": ids["zxiiro"],
              "message": "--ldap-group",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 64,
              "reviewer": ids["zxiiro"],
              "message": "We shouldn\u0027t use click.option() for required arguments that have no default value. Use click.argument instead.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 64,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 73,
              "reviewer": ids["zxiiro"],
              "message": "--ldap-server",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 75,
              "reviewer": ids["zxiiro"],
              "message": "--ldap-user-base",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 77,
              "reviewer": ids["zxiiro"],
              "message": "--ldap-group-base",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 79,
              "reviewer": ids["zxiiro"],
              "message": "We should use a click.argument() that accepts a space separated list of inputs like:\n\n csv GROUP [...]",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 79,
              "reviewer": ids["agardner"],
              "message": "not sure how to do this..",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/parseinfofile.py",
              "line": 0,
              "reviewer": ids["zxiiro"],
              "message": "I think we forgot to delete this file? It\u0027s in the infofile.py now right?",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/parseinfofile.py",
              "line": 0,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "setup.py",
              "line": 63,
              "reviewer": ids["zxiiro"],
              "message": "Alphabetical order please.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "shell/autocorrectinfofile",
              "line": 19,
              "reviewer": ids["zxiiro"],
              "message": "can we put it in /tmp/infofile/\u003cfiles\u003e instead. That way our /tmp directory does not get cluttered by a bunch of output from a single application.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "shell/autocorrectinfofile",
              "line": 19,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "shell/autocorrectinfofile",
              "line": 20,
              "reviewer": ids["zxiiro"],
              "message": "4 space indent these functions (below as well, and in the other shell files)..",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "shell/autocorrectinfofile",
              "line": 20,
              "reviewer": ids["agardner"],
              "message": "I would not normally do this, do we have a style guide I can follow?",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "shell/autocorrectinfofile",
              "line": 20,
              "reviewer": ids["zxiiro"],
              "message": "No, we should make one though. However in general most of our scripts use 4 space indents.\n\nRegardless of 4 or 2 space indents though we should indent functions for readability:\n\n func1() {\n     echo hello\n     echo world\n }",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "shell/yaml4info",
              "line": 47,
              "reviewer": ids["zxiiro"],
              "message": "move this down a line.",
              "patchSetTimestamp": 1532635275000
            }
          ],
          "sizeInsertions": 676,
          "sizeDeletions": 0
        },
        {
          "number": 36,
          "revision": "e38334b2dacc7da9289d2c6a766af700206fcf78",
          "parents": [
            "b383380735089719b120dd613eda4fcfa4ea55ff"
          ],
          "ref": "refs/changes/58/11558/36",
          "uploader": ids["agardner"],
          "createdOnDate": 1533664193000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1533664521000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 673,
          "sizeDeletions": -1
        },
        {
          "number": 37,
          "revision": "f64b28c446f86090457c15e40b6d5b6b142e3fe4",
          "parents": [
            "b383380735089719b120dd613eda4fcfa4ea55ff"
          ],
          "ref": "refs/changes/58/11558/37",
          "uploader": ids["agardner"],
          "createdOnDate": 1533752026000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1533752425000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 691,
          "sizeDeletions": -1
        },
        {
          "number": 38,
          "revision": "f2f2cf0c971d650ed6319e671de3ffab687b98bc",
          "parents": [
            "b383380735089719b120dd613eda4fcfa4ea55ff"
          ],
          "ref": "refs/changes/58/11558/38",
          "uploader": ids["agardner"],
          "createdOnDate": 1533752401000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 643,
          "sizeDeletions": -1
        },
        {
          "number": 39,
          "revision": "6955970637e509a9d53b6428c463c1fce2e01d3b",
          "parents": [
            "b383380735089719b120dd613eda4fcfa4ea55ff"
          ],
          "ref": "refs/changes/58/11558/39",
          "uploader": ids["agardner"],
          "createdOnDate": 1533752524000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1534597642000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1533752893000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 644,
          "sizeDeletions": -1
        },
        {
          "number": 40,
          "revision": "711d7b172fd724478ad5d3d2be362bdef5c8a925",
          "parents": [
            "027b69985bd4ca1a8cc711cc5215a7d67d99678c"
          ],
          "ref": "refs/changes/58/11558/40",
          "uploader": ids["agardner"],
          "createdOnDate": 1534789358000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534789741000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/autocorrectinfofile",
              "line": 18,
              "reviewer": ids["zxiiro"],
              "message": "I think the code would be a little more efficient if we swapped this around:\n\n DIR\u003d\"/tmp/...\"\n mkdir -p \"$DIR\"",
              "patchSetTimestamp": 1534789358000
            },
            {
              "file": "shell/autocorrectinfofile",
              "line": 18,
              "reviewer": ids["zxiiro"],
              "message": "Done",
              "patchSetTimestamp": 1534789358000
            }
          ],
          "sizeInsertions": 643,
          "sizeDeletions": 0
        },
        {
          "number": 41,
          "revision": "fdf3a3b8a61928af1968f3bf9714bc5a54d87fd8",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/58/11558/41",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534810972000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1534811321000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 663,
          "sizeDeletions": 0
        },
        {
          "number": 42,
          "revision": "a105a193cef48e604e8ce5b3e7f0dbd84ba31e6d",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/58/11558/42",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534811052000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1534811401000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 667,
          "sizeDeletions": 0
        },
        {
          "number": 43,
          "revision": "53f4104c41fae85bd558448a99570946b1d63990",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/58/11558/43",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534811532000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534812007000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 667,
          "sizeDeletions": 0
        },
        {
          "number": 44,
          "revision": "132c54d483d15c9fb9859b6eaeddefd227ecb046",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/58/11558/44",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534812025000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1534814449000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534812557000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "lftools/cli/infofile.py",
              "line": 32,
              "reviewer": ids["zxiiro"],
              "message": "Now that I understand this a bit more I think maybe calling this function \"get_committers\" is more accurate?",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 32,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 52,
              "reviewer": ids["zxiiro"],
              "message": "So the output we are providing it needs to be a properly formatted YAML?\n\nIn the case where only ID is printed it\u0027s not outputting a list item \"- id: uid\" instead it\u0027s just \"id: uid\" is this intended?",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 52,
              "reviewer": ids["agardner"],
              "message": "It\u0027s just output to be read by a human or parsed by a script (autocorrectinfofile) I don\u0027t see it living as valid yaml in a file.",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 54,
              "reviewer": ids["zxiiro"],
              "message": "Ok I think my original comment got misunderstood. Hopefully I\u0027ll be more clear this time. I didn\u0027t mean to add yet another if-statement to check that FULL and ID are passed.\n\nIf I understand the intent of this function correctly then it has 2 modes.\n\n1. --id is passed so return a single account\n2. --id is not passed so return all committers\n\nWithin 2) there is 2 states:\n\na. --full is passed so print name, email, and id\nb. --full is not passed so return only id\n\n\nI think this code would be a lot more cleaner. There\u0027s 2 parts to this:\n\nnew function declared above list_committers:\n\n    def print_committer_info(committer, full):\n        if full:\n            print(\"    - name: {}\".format(committer[\u0027name\u0027]))\n            print(\"      email: {}\".format(committer[\u0027email\u0027]))\n\n        print(\"      id: {}\".format(committer[\u0027id\u0027]))\n\nThis function handles printing both full and none full outputs.\n\nThe 2nd part the new loop:\n\n        for item in lookup:\n            if id:\n                if item[\u0027id\u0027] \u003d\u003d id:\n                    print_committer_info(item, True)\n                    break\n                else:\n                    continue\n\n            print_committer_info(item, full)\n\nThis loop is more clean and covers both cases of if we want to search for a single ID, vs print all of the IDs.",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 54,
              "reviewer": ids["agardner"],
              "message": "print_committer_info(item, full)\n\n-Also, done",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 66,
              "reviewer": ids["zxiiro"],
              "message": "This only deals with committers as far as I can tell. Maybe calling the function \"sync_committers\" would make more sense?",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 66,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 67,
              "reviewer": ids["zxiiro"],
              "message": "Sync\u0027s committer information from LDAP into INFO.yaml",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 67,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 79,
              "reviewer": ids["zxiiro"],
              "message": "Using \"with open\" syntax would be much better here.\n\n with open(info_file) as f:\n     info_data \u003d ryaml.load(f)\n with open(ldap_file) as f:\n     ldap_data \u003d ryaml.load(f)\n\nThis ensures that f.close() is appropriately called.",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 79,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 11,
              "reviewer": ids["zxiiro"],
              "message": "I think this pydoc is not accurate. It works on more than just OPNFV right?",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 14,
              "reviewer": ids["zxiiro"],
              "message": "Would be easier to read like this:\n\nPrereqs:\n\n - yum install python-devel openldap-devel\n - pip install python-ldap",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 37,
              "reviewer": ids["zxiiro"],
              "message": "committers",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "releasenotes/notes/ldap-info-017df79c3c8f9585.yaml",
              "line": 8,
              "reviewer": ids["askb"],
              "message": "This is not an .rst file. Do we need the `.. code block::` here?",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "releasenotes/notes/ldap-info-017df79c3c8f9585.yaml",
              "line": 8,
              "reviewer": ids["zxiiro"],
              "message": "This is an RST file for our purposes. Reno generates RSTs from YAML via the Sphinx plugin.",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "releasenotes/notes/ldap-info-017df79c3c8f9585.yaml",
              "line": 19,
              "reviewer": ids["askb"],
              "message": "this is not an .rst file. Do we need the `.. code block::` here?",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "releasenotes/notes/ldap-info-017df79c3c8f9585.yaml",
              "line": 19,
              "reviewer": ids["zxiiro"],
              "message": "This is an RST file for our purposes. Reno generates RSTs from YAML via the Sphinx plugin.",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "shell/inactivecommitters",
              "line": 23,
              "reviewer": ids["askb"],
              "message": "optionally fix, shorter version: `date +%F`",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "shell/inactivecommitters",
              "line": 23,
              "reviewer": ids["zxiiro"],
              "message": "Personally I like %Y-%m-%d because it\u0027s clear what it means at a glance. %F I\u0027d have to Google and find out.",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "shell/inactivecommitters",
              "line": 37,
              "reviewer": ids["askb"],
              "message": "optionally fix, shorter version: `date +%F`",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "shell/inactivecommitters",
              "line": 37,
              "reviewer": ids["zxiiro"],
              "message": "Personally I like %Y-%m-%d because it\u0027s clear what it means at a glance. %F I\u0027d have to Google and find out.",
              "patchSetTimestamp": 1534812025000
            }
          ],
          "sizeInsertions": 667,
          "sizeDeletions": 0
        },
        {
          "number": 45,
          "revision": "430f9b4fb43c99cc7dd984b6f7766e7c57f10c55",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/58/11558/45",
          "uploader": ids["agardner"],
          "createdOnDate": 1534877202000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534877663000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 670,
          "sizeDeletions": 0
        },
        {
          "number": 46,
          "revision": "4d7ce295121e166f2fb18417acd8f5193d4b382c",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/58/11558/46",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534887115000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1534888446000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535120394000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1535120808000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1534967664000,
              "grantedBy": ids["agardner"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534887525000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 670,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I8c3b4a68aaed349d026d08134de4147ea74a9696",
      "commitNumber": 12375,
      "subject": "Disable CLM jobs by default",
      "owner": ids["jeremyphelps"],
      "url": "https://gerrit.linuxfoundation.org/infra/12375",
      "commitMessage": "Disable CLM jobs by default\n\nChange-Id: I8c3b4a68aaed349d026d08134de4147ea74a9696\nSigned-off-by: Jeremy Phelps \u003cjphelps@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535051558000,
      "lastUpdatedDate": 1535053808000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1535051558000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535051784000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/729/"
        },
        {
          "timestamp": 1535051930000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/729/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/729"
        },
        {
          "timestamp": 1535053807000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1535053808000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "4280674744e6a55cfbf34a6edbab606aa242220a",
          "parents": [
            "9643e91a8afa968c8b9efdcdca04fe8b356fd4e3"
          ],
          "ref": "refs/changes/75/12375/1",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1535051558000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535053807000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1535053808000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535051930000,
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
      "id": "I5d67b8a70a4b2d5dc5e7c4028ba62c21cd7a7d1e",
      "commitNumber": 12180,
      "subject": "Make GHPRB trigger on comment only",
      "owner": ids["jeremyphelps"],
      "url": "https://gerrit.linuxfoundation.org/infra/12180",
      "commitMessage": "Make GHPRB trigger on comment only\n\nIssue: RELENG-1132\nChange-Id: I5d67b8a70a4b2d5dc5e7c4028ba62c21cd7a7d1e\nSigned-off-by: Jeremy Phelps \u003cjphelps@linuxfoundation.org\u003e\n",
      "createdOnDate": 1533839199000,
      "lastUpdatedDate": 1533858628000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["jeremyphelps"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1533839199000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1533839283000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/692/"
        },
        {
          "timestamp": 1533839461000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/692/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/692"
        },
        {
          "timestamp": 1533839725000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1533858092000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1533858141000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1533858177000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1533858357000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1533858372000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1533858436000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/694/"
        },
        {
          "timestamp": 1533858605000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/694/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/694"
        },
        {
          "timestamp": 1533858628000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "1ad13a6c96d4b82b74d194621055fa9ee371f56b",
          "parents": [
            "3ae312fbcced7c547bbe98a5692a6d2dcfc17558"
          ],
          "ref": "refs/changes/80/12180/1",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1533839199000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1533839725000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1533839461000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 291,
              "reviewer": ids["zxiiro"],
              "message": "Maybe we just need to change this to \"true\".\n\nThere\u0027s a bunch of other cases where we also allow trigger phrase builds too.",
              "patchSetTimestamp": 1533839199000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 291,
              "reviewer": ids["jeremyphelps"],
              "message": "Hmm that\u0027s not a bad idea, although for this particular job, will a committer ever need to run CLM?",
              "patchSetTimestamp": 1533839199000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 291,
              "reviewer": ids["zxiiro"],
              "message": "Yes, OpenDaylight committers often run it manually around release time.",
              "patchSetTimestamp": 1533839199000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 291,
              "reviewer": ids["jeremyphelps"],
              "message": "got it..fix inbound",
              "patchSetTimestamp": 1533839199000
            }
          ],
          "sizeInsertions": 0,
          "sizeDeletions": -12
        },
        {
          "number": 2,
          "revision": "9643e91a8afa968c8b9efdcdca04fe8b356fd4e3",
          "parents": [
            "3ae312fbcced7c547bbe98a5692a6d2dcfc17558"
          ],
          "ref": "refs/changes/80/12180/2",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1533858357000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1533858372000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1533858628000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1533858605000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Idd342b85a0306cfedb63215f4a6442ced74c94e4",
      "commitNumber": 12157,
      "subject": "Upgrade minimal jjb version to 2.2.1",
      "owner": ids["jeremyphelps"],
      "url": "https://gerrit.linuxfoundation.org/infra/12157",
      "commitMessage": "Upgrade minimal jjb version to 2.2.1\n\nIssue: RELENG-1129\nChange-Id: Idd342b85a0306cfedb63215f4a6442ced74c94e4\nSigned-off-by: Jeremy Phelps \u003cjphelps@linuxfoundation.org\u003e\n",
      "createdOnDate": 1533750146000,
      "lastUpdatedDate": 1533755479000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1533750146000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1533750393000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/690/"
        },
        {
          "timestamp": 1533750599000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/690/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/690"
        },
        {
          "timestamp": 1533755477000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1533755479000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "3ae312fbcced7c547bbe98a5692a6d2dcfc17558",
          "parents": [
            "8a5ed774fd2f4109ff9fe6da4359263dc3a1ab29"
          ],
          "ref": "refs/changes/57/12157/1",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1533750146000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1533755477000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1533755479000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1533750599000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        }
      ]
    }
  ],
  "reviewRequestors": [
    {
      "identity": ids["askb"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 4,
        "commentCount": 3,
        "approvals": {
          "-1": 2,
          "1": 1,
          "2": 1
        }
      }
    },
    {
      "identity": ids["agardner"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 7,
        "commentCount": 68,
        "approvals": {
          "-1": 5,
          "1": 1,
          "2": 1
        }
      }
    },
    {
      "identity": ids["jeremyphelps"],
      "approvalData": {
        "addedAsReviewerCount": 3,
        "approvalCount": 7,
        "commentCount": 2,
        "approvals": {
          "-1": 1,
          "1": 3,
          "2": 3
        }
      }
    }
  ],
  "commentsWritten": [
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "I5d67b8a70a4b2d5dc5e7c4028ba62c21cd7a7d1e",
        "commitNumber": 12180,
        "subject": "Make GHPRB trigger on comment only",
        "owner": ids["jeremyphelps"],
        "url": "https://gerrit.linuxfoundation.org/infra/12180",
        "commitMessage": "Make GHPRB trigger on comment only\n\nIssue: RELENG-1132\nChange-Id: I5d67b8a70a4b2d5dc5e7c4028ba62c21cd7a7d1e\nSigned-off-by: Jeremy Phelps \u003cjphelps@linuxfoundation.org\u003e\n",
        "createdOnDate": 1533839199000,
        "lastUpdatedDate": 1533858628000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["agrimberg"],
          ids["zxiiro"],
          ids["jeremyphelps"],
          ids["lf-jenkins"]
        ],
        "comments": [
          {
            "timestamp": 1533839199000,
            "reviewer": ids["jeremyphelps"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1533839283000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/692/"
          },
          {
            "timestamp": 1533839461000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/692/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/692"
          },
          {
            "timestamp": 1533839725000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1: Code-Review-1\n\n(1 comment)"
          },
          {
            "timestamp": 1533858092000,
            "reviewer": ids["jeremyphelps"],
            "message": "Patch Set 1:\n\n(1 comment)"
          },
          {
            "timestamp": 1533858141000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1:\n\n(1 comment)"
          },
          {
            "timestamp": 1533858177000,
            "reviewer": ids["jeremyphelps"],
            "message": "Patch Set 1:\n\n(1 comment)"
          },
          {
            "timestamp": 1533858357000,
            "reviewer": ids["jeremyphelps"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1533858372000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2: Code-Review+2"
          },
          {
            "timestamp": 1533858436000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/694/"
          },
          {
            "timestamp": 1533858605000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/694/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/694"
          },
          {
            "timestamp": 1533858628000,
            "reviewer": ids["zxiiro"],
            "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "1ad13a6c96d4b82b74d194621055fa9ee371f56b",
            "parents": [
              "3ae312fbcced7c547bbe98a5692a6d2dcfc17558"
            ],
            "ref": "refs/changes/80/12180/1",
            "uploader": ids["jeremyphelps"],
            "createdOnDate": 1533839199000,
            "author": ids["jeremyphelps"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1533839725000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1533839461000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 291,
                "reviewer": ids["zxiiro"],
                "message": "Maybe we just need to change this to \"true\".\n\nThere\u0027s a bunch of other cases where we also allow trigger phrase builds too.",
                "patchSetTimestamp": 1533839199000
              },
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 291,
                "reviewer": ids["jeremyphelps"],
                "message": "Hmm that\u0027s not a bad idea, although for this particular job, will a committer ever need to run CLM?",
                "patchSetTimestamp": 1533839199000
              },
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 291,
                "reviewer": ids["zxiiro"],
                "message": "Yes, OpenDaylight committers often run it manually around release time.",
                "patchSetTimestamp": 1533839199000
              },
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 291,
                "reviewer": ids["jeremyphelps"],
                "message": "got it..fix inbound",
                "patchSetTimestamp": 1533839199000
              }
            ],
            "sizeInsertions": 0,
            "sizeDeletions": -12
          },
          {
            "number": 2,
            "revision": "9643e91a8afa968c8b9efdcdca04fe8b356fd4e3",
            "parents": [
              "3ae312fbcced7c547bbe98a5692a6d2dcfc17558"
            ],
            "ref": "refs/changes/80/12180/2",
            "uploader": ids["jeremyphelps"],
            "createdOnDate": 1533858357000,
            "author": ids["jeremyphelps"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1533858372000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1533858628000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1533858605000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 1,
            "sizeDeletions": -1
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "jjb/lf-maven-jobs.yaml",
          "line": 291,
          "reviewer": ids["zxiiro"],
          "message": "Maybe we just need to change this to \"true\".\n\nThere\u0027s a bunch of other cases where we also allow trigger phrase builds too.",
          "patchSetTimestamp": 1533839199000
        },
        {
          "file": "jjb/lf-maven-jobs.yaml",
          "line": 291,
          "reviewer": ids["zxiiro"],
          "message": "Yes, OpenDaylight committers often run it manually around release time.",
          "patchSetTimestamp": 1533839199000
        }
      ]
    },
    {
      "commit": {
        "project": "releng/lftools",
        "branch": "master",
        "id": "I4f4055441042d790008754bb085447f52e1c1a78",
        "commitNumber": 11558,
        "subject": "Extend lftools with scripts for ldap lookups",
        "owner": ids["agardner"],
        "url": "https://gerrit.linuxfoundation.org/infra/11558",
        "commitMessage": "Extend lftools with scripts for ldap lookups\n\nAdd 2 new commands to lftools:\n\n    - infofile\n    - ldap\n\nprereqs:\nFor ldap lookups to work you must be on the VPN and have the cert\nto get the cert: log in to any collab system and grab /etc/ipa/ca.crt\nin /etc/openldap/ldap.conf\n\nTLS_REQCERT always\nTLS_CACERTDIR /etc/openldap/certs\nTLS_CACERT /etc/openldap/certs/ca.crt\n\nTo test:\n\n1. Clone this patchset\n2. start venv\n\n   pip uninstall lftools \u0026\u0026 pip install -e .\n\nUsage:\n\n$ lftools ldap\nUsage: lftools ldap [OPTIONS] COMMAND [ARGS]...\n\n  LDAP TOOLS.\n\nCommands:\n  autocorrectinfofile  Verify INFO.yaml against LDAP group.\n  csv                  Query an Ldap server.\n  inactivecommitters   Check committer participation.\n  yaml4info            Build yaml of commiters for your INFO.yaml.\n\n$ lftools infofile\nUsage: lftools infofile [OPTIONS] COMMAND [ARGS]...\n\n  INFO.yaml TOOLS.\n\nCommands:\n  get-committers    Extract Committer info from INFO.yaml or LDAP...\n  sync-committers   Script to insert missing values from ldap...\n\nIssue: RELENG-407\nChange-Id: I4f4055441042d790008754bb085447f52e1c1a78\nSigned-off-by: Aric Gardner \u003cagardner@linuxfoundation.org\u003e\n",
        "createdOnDate": 1530040611000,
        "lastUpdatedDate": 1535120808000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["zxiiro"],
          ids["bramwelt"],
          ids["lf-jenkins"],
          ids["agrimberg"],
          ids["abaranov"],
          ids["agardner"],
          ids["askb"]
        ],
        "comments": [
          {
            "timestamp": 1530040611000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1530041032000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1530047425000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 3."
          },
          {
            "timestamp": 1530047712000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/117/"
          },
          {
            "timestamp": 1530047904000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/117/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/117/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/117"
          },
          {
            "timestamp": 1530056285000,
            "reviewer": ids["bramwelt"],
            "message": "Patch Set 3:\n\n(1 comment)"
          },
          {
            "timestamp": 1530122057000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 4."
          },
          {
            "timestamp": 1530122164000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/121/"
          },
          {
            "timestamp": 1530122375000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/121/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/121/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/121"
          },
          {
            "timestamp": 1530127564000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 5."
          },
          {
            "timestamp": 1530127845000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/122/"
          },
          {
            "timestamp": 1530128187000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/122/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/122/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/122"
          },
          {
            "timestamp": 1530128919000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 6."
          },
          {
            "timestamp": 1530129115000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 7."
          },
          {
            "timestamp": 1530129306000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/123/"
          },
          {
            "timestamp": 1530129505000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 7: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/123/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/123/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/123"
          },
          {
            "timestamp": 1530129989000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 8."
          },
          {
            "timestamp": 1530130045000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 9: Commit message was updated."
          },
          {
            "timestamp": 1530130271000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 10."
          },
          {
            "timestamp": 1530130281000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/124/"
          },
          {
            "timestamp": 1530130490000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 10: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/124/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/124/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/124"
          },
          {
            "timestamp": 1530231898000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 11."
          },
          {
            "timestamp": 1530232203000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 11:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/125/"
          },
          {
            "timestamp": 1530232343000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 12."
          },
          {
            "timestamp": 1530232371000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 11: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/125/ : ABORTED\n\nFile lftools/cli/parseinfofile.py is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/125/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/125"
          },
          {
            "timestamp": 1530232596000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 13."
          },
          {
            "timestamp": 1530232610000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 13:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/126/"
          },
          {
            "timestamp": 1530232821000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 13: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/126/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/126/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/126"
          },
          {
            "timestamp": 1530294687000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 14."
          },
          {
            "timestamp": 1530294738000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 14:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/129/"
          },
          {
            "timestamp": 1530294999000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 14: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/129/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/129/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/129"
          },
          {
            "timestamp": 1530295343000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 15."
          },
          {
            "timestamp": 1530295528000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 15:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/130/"
          },
          {
            "timestamp": 1530295780000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 15: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/130/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/130/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/130"
          },
          {
            "timestamp": 1530298507000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 16."
          },
          {
            "timestamp": 1530298741000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 16:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/131/"
          },
          {
            "timestamp": 1530298903000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 16: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/131/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/131/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/131"
          },
          {
            "timestamp": 1530301508000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 17."
          },
          {
            "timestamp": 1530301587000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 17:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/132/"
          },
          {
            "timestamp": 1530301796000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 17: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/132/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/132"
          },
          {
            "timestamp": 1530737816000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 18."
          },
          {
            "timestamp": 1530738107000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 18:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/139/"
          },
          {
            "timestamp": 1530738201000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 19."
          },
          {
            "timestamp": 1530738223000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 18: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/139/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/139/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/139"
          },
          {
            "timestamp": 1530738388000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 19:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/140/"
          },
          {
            "timestamp": 1530738553000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 19: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/140/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/140/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/140"
          },
          {
            "timestamp": 1530739121000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 20."
          },
          {
            "timestamp": 1530739407000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 20:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/141/"
          },
          {
            "timestamp": 1530739597000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 20: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/141/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/141/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/141"
          },
          {
            "timestamp": 1530808952000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 21."
          },
          {
            "timestamp": 1530809093000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 22."
          },
          {
            "timestamp": 1530809243000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 22:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/142/"
          },
          {
            "timestamp": 1530809477000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 22: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/142/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/142/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/142"
          },
          {
            "timestamp": 1530810620000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 23."
          },
          {
            "timestamp": 1530810705000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 23:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/143/"
          },
          {
            "timestamp": 1530810873000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 23: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/143/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/143/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/143"
          },
          {
            "timestamp": 1530811918000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 24."
          },
          {
            "timestamp": 1530812197000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 24:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/144/"
          },
          {
            "timestamp": 1530812385000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 24: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/144/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/144/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/144"
          },
          {
            "timestamp": 1530815279000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 25."
          },
          {
            "timestamp": 1530815529000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 25:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/145/"
          },
          {
            "timestamp": 1530815530000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 26."
          },
          {
            "timestamp": 1530815555000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 25: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/145/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/145/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/145"
          },
          {
            "timestamp": 1530815556000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 26:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/146/"
          },
          {
            "timestamp": 1530815701000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 26: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/146/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/146/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/146"
          },
          {
            "timestamp": 1530817028000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 27."
          },
          {
            "timestamp": 1530817296000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 27:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/147/"
          },
          {
            "timestamp": 1530817493000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 27: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/147/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/147"
          },
          {
            "timestamp": 1531180963000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 28."
          },
          {
            "timestamp": 1531181148000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 28:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/150/"
          },
          {
            "timestamp": 1531181387000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 28: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/150/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/150"
          },
          {
            "timestamp": 1531181550000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 28: Code-Review-1\n\n(5 comments)"
          },
          {
            "timestamp": 1531243076000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 29."
          },
          {
            "timestamp": 1531243336000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 29:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/151/"
          },
          {
            "timestamp": 1531243569000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 29: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/151/ : FAILURE\n\nFile shell/GrouplookupUser is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/151/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/151"
          },
          {
            "timestamp": 1531248808000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 30."
          },
          {
            "timestamp": 1531249097000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 30:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/152/"
          },
          {
            "timestamp": 1531249318000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 30: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/152/ : FAILURE\n\nFile shell/GrouplookupUser is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/152/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/152"
          },
          {
            "timestamp": 1531515261000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 31."
          },
          {
            "timestamp": 1531515546000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 31:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/178/"
          },
          {
            "timestamp": 1531515759000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 31: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/178/ : FAILURE\n\nFile shell/GrouplookupUser is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/178/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/178"
          },
          {
            "timestamp": 1531947666000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 32."
          },
          {
            "timestamp": 1531947760000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 32:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/189/"
          },
          {
            "timestamp": 1531947918000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 32: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/189/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/189/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/189"
          },
          {
            "timestamp": 1532028249000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 33."
          },
          {
            "timestamp": 1532028268000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 33:\n\n(1 comment)"
          },
          {
            "timestamp": 1532028437000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 33:\n\n(1 comment)"
          },
          {
            "timestamp": 1532028547000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 33:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/194/"
          },
          {
            "timestamp": 1532028715000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 33: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/194/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/194/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/194"
          },
          {
            "timestamp": 1532030753000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 34."
          },
          {
            "timestamp": 1532031045000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 34:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/195/"
          },
          {
            "timestamp": 1532031194000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 34: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/195/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/195/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/195"
          },
          {
            "timestamp": 1532113585000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 34:\n\nrecheck"
          },
          {
            "timestamp": 1532113689000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 34: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/198/"
          },
          {
            "timestamp": 1532113858000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 34: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/198/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/198/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/198"
          },
          {
            "timestamp": 1532368103000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 34:\n\nrecheck"
          },
          {
            "timestamp": 1532368407000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 34: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/199/"
          },
          {
            "timestamp": 1532368563000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 34: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/199/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/199/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/199"
          },
          {
            "timestamp": 1532440547000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 34:\n\nrecheck"
          },
          {
            "timestamp": 1532441297000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 34: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/201/"
          },
          {
            "timestamp": 1532441438000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 34: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/201/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/201/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/201"
          },
          {
            "timestamp": 1532566037000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 34: Code-Review-1\n\n(3 comments)\n\nCan we consistently use 4 space indents for the shell scripts so that they are easier to read?\n\nDo the ldap and info file changes need to be merged together? if not maybe we can break them out into 2 patches so that we can merge them faster / have smaller amounts of things to review.\n\nThis is fine as is too if it\u0027s too hard to do."
          },
          {
            "timestamp": 1532585365000,
            "reviewer": ids["askb"],
            "message": "Patch Set 34:\n\nrecheck"
          },
          {
            "timestamp": 1532585641000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 34: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/213/"
          },
          {
            "timestamp": 1532585847000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 34: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/213/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/213"
          },
          {
            "timestamp": 1532635275000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 35."
          },
          {
            "timestamp": 1532635380000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 35:\n\n@Thanh I would like to merge this together, the ldap script has no real value on its own."
          },
          {
            "timestamp": 1532635572000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 35:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/217/"
          },
          {
            "timestamp": 1532635783000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 35: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/217/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/217"
          },
          {
            "timestamp": 1532707297000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 35: Code-Review+1"
          },
          {
            "timestamp": 1532709797000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 35: Code-Review-1\n\n(35 comments)"
          },
          {
            "timestamp": 1533664193000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 36."
          },
          {
            "timestamp": 1533664269000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 36:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/233/"
          },
          {
            "timestamp": 1533664521000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 36: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/233/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/233"
          },
          {
            "timestamp": 1533752026000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 37."
          },
          {
            "timestamp": 1533752290000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 37:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/234/"
          },
          {
            "timestamp": 1533752401000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 38."
          },
          {
            "timestamp": 1533752425000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 37: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/234/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/234/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/234"
          },
          {
            "timestamp": 1533752439000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 38:\n\n(24 comments)"
          },
          {
            "timestamp": 1533752524000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 39."
          },
          {
            "timestamp": 1533752670000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 39:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/235/"
          },
          {
            "timestamp": 1533752689000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 39:\n\n(2 comments)"
          },
          {
            "timestamp": 1533752893000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 39: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/235/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/235"
          },
          {
            "timestamp": 1534597555000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 35:\n\n(1 comment)"
          },
          {
            "timestamp": 1534597642000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 39: Code-Review-1\n\nI\u0027d like to see that the bash functions are appropriately indented for readability."
          },
          {
            "timestamp": 1534789358000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 40."
          },
          {
            "timestamp": 1534789496000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 40:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/240/"
          },
          {
            "timestamp": 1534789741000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 40: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/240/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/240"
          },
          {
            "timestamp": 1534809564000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 35:\n\n(7 comments)"
          },
          {
            "timestamp": 1534810972000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 41."
          },
          {
            "timestamp": 1534811052000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 42."
          },
          {
            "timestamp": 1534811093000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 40:\n\n(3 comments)"
          },
          {
            "timestamp": 1534811137000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 41:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/241/"
          },
          {
            "timestamp": 1534811185000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 42:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/242/"
          },
          {
            "timestamp": 1534811321000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 41: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/241/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/241/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/241"
          },
          {
            "timestamp": 1534811401000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 42: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/242/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/242/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/242"
          },
          {
            "timestamp": 1534811532000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 43."
          },
          {
            "timestamp": 1534811591000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 35:\n\n(1 comment)"
          },
          {
            "timestamp": 1534811783000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 43:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/243/"
          },
          {
            "timestamp": 1534812007000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 43: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/243/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/243"
          },
          {
            "timestamp": 1534812025000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 44."
          },
          {
            "timestamp": 1534812257000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 44:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/244/"
          },
          {
            "timestamp": 1534812557000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 44: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/244/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/244"
          },
          {
            "timestamp": 1534814449000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 44: Code-Review-1\n\n(9 comments)\n\n@Aric, I made some minor changes but mainly updated to add the reno release notes file. Please check to make sure I didn\u0027t unintentionally break anything and review the release notes file. It should provide details on whatever an end user should know using the new tool.\n\nTake a look at https://docs.openstack.org/reno/latest/user/usage.html#editing-a-release-note for details on the release notes format and add any other fields you think might be important to add."
          },
          {
            "timestamp": 1534833148000,
            "reviewer": ids["askb"],
            "message": "Patch Set 44:\n\n(4 comments)\n\nsome initial comments, will test this and get back."
          },
          {
            "timestamp": 1534867053000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 44:\n\n(4 comments)"
          },
          {
            "timestamp": 1534877202000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 45."
          },
          {
            "timestamp": 1534877222000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 45:\n\n(6 comments)"
          },
          {
            "timestamp": 1534877465000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 45:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/245/"
          },
          {
            "timestamp": 1534877663000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 45: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/245/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/245"
          },
          {
            "timestamp": 1534887115000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 46."
          },
          {
            "timestamp": 1534887185000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 46:\n\nUpdated the docs to update the get-committers and sync-committers rename.\n\nAlso updated click command for get_committers and sync_committers to use dashes (get-committers and sync-committers) as using underscores in command names is ugly."
          },
          {
            "timestamp": 1534887245000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 46: Code-Review+1"
          },
          {
            "timestamp": 1534887308000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 46:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/246/"
          },
          {
            "timestamp": 1534887525000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 46: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/246/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/246"
          },
          {
            "timestamp": 1534888446000,
            "reviewer": ids["agrimberg"],
            "message": "Patch Set 46: Code-Review+1"
          },
          {
            "timestamp": 1534967664000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 46: Code-Review+2"
          },
          {
            "timestamp": 1535120394000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 46: Code-Review+2\n\nGoing to merge this since I\u0027d like to release lftools today. Further discussion and tweaks can be taken up on the mailing list / Jira."
          },
          {
            "timestamp": 1535120808000,
            "reviewer": ids["zxiiro"],
            "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "ad66772385d67ed29d455cc39939f16a15cf0768",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/1",
            "uploader": ids["agardner"],
            "createdOnDate": 1530040611000,
            "author": ids["agardner"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 132,
            "sizeDeletions": 0
          },
          {
            "number": 2,
            "revision": "4661cc083a5443fc43e075822639b80fd6b0fed4",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/2",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1530041032000,
            "author": ids["agardner"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 130,
            "sizeDeletions": 0
          },
          {
            "number": 3,
            "revision": "6cf84b9491ffa59bcc1ca94df4a780fe9891e2de",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/3",
            "uploader": ids["agardner"],
            "createdOnDate": 1530047425000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530047904000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 31,
                "reviewer": ids["bramwelt"],
                "message": "here",
                "patchSetTimestamp": 1530047425000
              }
            ],
            "sizeInsertions": 128,
            "sizeDeletions": 0
          },
          {
            "number": 4,
            "revision": "55defe1f6099c386237731e1a57d523875ddc8d7",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/4",
            "uploader": ids["agardner"],
            "createdOnDate": 1530122057000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530122375000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 132,
            "sizeDeletions": 0
          },
          {
            "number": 5,
            "revision": "d7a2b99f15d64cb90ea565ae8d7815d9fbfe74f2",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/5",
            "uploader": ids["agardner"],
            "createdOnDate": 1530127564000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530128187000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 195,
            "sizeDeletions": 0
          },
          {
            "number": 6,
            "revision": "afad36fab2e57679d683188eea3f5cd57f94748d",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/6",
            "uploader": ids["agardner"],
            "createdOnDate": 1530128919000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [],
            "comments": [
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 28,
                "reviewer": ids["zxiiro"],
                "message": "indent by 4 otherwise it\u0027s not affecting the def above. Python cares very much about indents :(",
                "patchSetTimestamp": 1530128919000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 141,
                "reviewer": ids["zxiiro"],
                "message": "These need to be spaces not tabs.",
                "patchSetTimestamp": 1530128919000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 149,
                "reviewer": ids["zxiiro"],
                "message": "Remove this.",
                "patchSetTimestamp": 1530128919000
              }
            ],
            "sizeInsertions": 214,
            "sizeDeletions": 0
          },
          {
            "number": 7,
            "revision": "c24ad9294486a72d1ad4b9a27b277ef932623a46",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/7",
            "uploader": ids["agardner"],
            "createdOnDate": 1530129115000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530129505000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 214,
            "sizeDeletions": 0
          },
          {
            "number": 8,
            "revision": "fa50468ff9f81a08176121dd83d6bfc5cc780f11",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/8",
            "uploader": ids["agardner"],
            "createdOnDate": 1530129989000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 215,
            "sizeDeletions": 0
          },
          {
            "number": 9,
            "revision": "060261733d07e7a9fc9124f3792b36ea18c4abc7",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/9",
            "uploader": ids["agardner"],
            "createdOnDate": 1530130045000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "NO_CODE_CHANGE",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 215,
            "sizeDeletions": 0
          },
          {
            "number": 10,
            "revision": "71ff6b3ae29e61d0b06036846b14f7798683aebf",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/10",
            "uploader": ids["agardner"],
            "createdOnDate": 1530130271000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530130490000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 216,
            "sizeDeletions": 0
          },
          {
            "number": 11,
            "revision": "ee6dffb7c44e9544cae3a828034ae18c5385cb48",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/11",
            "uploader": ids["agardner"],
            "createdOnDate": 1530231898000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530232371000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 355,
            "sizeDeletions": 0
          },
          {
            "number": 12,
            "revision": "1357154a9daf358d67b8810005b07eac1b2e3a8f",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/12",
            "uploader": ids["agardner"],
            "createdOnDate": 1530232343000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 355,
            "sizeDeletions": 0
          },
          {
            "number": 13,
            "revision": "4811b39667213e166902457ba5d7dc79bab66de8",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/13",
            "uploader": ids["agardner"],
            "createdOnDate": 1530232596000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530232821000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 366,
            "sizeDeletions": 0
          },
          {
            "number": 14,
            "revision": "67ea22f82025426906a9e8eb078b2edd78cab21f",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/14",
            "uploader": ids["agardner"],
            "createdOnDate": 1530294687000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530294999000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 342,
            "sizeDeletions": 0
          },
          {
            "number": 15,
            "revision": "9f070e5d0157fed342f4ffa12ccc5c6fa41a12c8",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/15",
            "uploader": ids["agardner"],
            "createdOnDate": 1530295343000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530295780000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 353,
            "sizeDeletions": 0
          },
          {
            "number": 16,
            "revision": "3296e2647a6509fdc3cf50e8bd644649cfdb215f",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/16",
            "uploader": ids["agardner"],
            "createdOnDate": 1530298507000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530298903000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 361,
            "sizeDeletions": 0
          },
          {
            "number": 17,
            "revision": "f94f62e34379dc9537d7644601b5b509050ef264",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/17",
            "uploader": ids["agardner"],
            "createdOnDate": 1530301508000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1530301796000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 357,
            "sizeDeletions": 0
          },
          {
            "number": 18,
            "revision": "17ab39836640351ab1d595c3ebd949f0194b832c",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/18",
            "uploader": ids["agardner"],
            "createdOnDate": 1530737816000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530738223000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 451,
            "sizeDeletions": 0
          },
          {
            "number": 19,
            "revision": "fca73170c22cb36172c9395bd5b9d97cb9da181e",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/19",
            "uploader": ids["agardner"],
            "createdOnDate": 1530738201000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530738553000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 451,
            "sizeDeletions": 0
          },
          {
            "number": 20,
            "revision": "c3cb60de5a8c46858af5b5dba10aad1687671c06",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/20",
            "uploader": ids["agardner"],
            "createdOnDate": 1530739121000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530739597000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 448,
            "sizeDeletions": 0
          },
          {
            "number": 21,
            "revision": "9d65e5536e22142b83cc4e9f6ab28cd2c1830812",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/21",
            "uploader": ids["agardner"],
            "createdOnDate": 1530808952000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 466,
            "sizeDeletions": -291
          },
          {
            "number": 22,
            "revision": "844945c96b0288a516c2d0fe4b6be1a49715417f",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/22",
            "uploader": ids["agardner"],
            "createdOnDate": 1530809093000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530809477000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 466,
            "sizeDeletions": 0
          },
          {
            "number": 23,
            "revision": "65f29eeb9e224d96b57b2e100f4e56d5906650b5",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/23",
            "uploader": ids["agardner"],
            "createdOnDate": 1530810620000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530810873000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 467,
            "sizeDeletions": 0
          },
          {
            "number": 24,
            "revision": "6e47fc07a7dd9c009c73cf0d4b68e65ea6ee6205",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/24",
            "uploader": ids["agardner"],
            "createdOnDate": 1530811918000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530812385000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 457,
            "sizeDeletions": 0
          },
          {
            "number": 25,
            "revision": "2cd2cec8203e8269ceb5221072ec902217311de8",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/25",
            "uploader": ids["agardner"],
            "createdOnDate": 1530815279000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530815555000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 543,
            "sizeDeletions": 0
          },
          {
            "number": 26,
            "revision": "28baea74b56ae564ff807648a24b1b77ee5ec505",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/26",
            "uploader": ids["agardner"],
            "createdOnDate": 1530815530000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530815701000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 545,
            "sizeDeletions": 0
          },
          {
            "number": 27,
            "revision": "8240a1056302d79af15a84120a0f435642ddb7c1",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/27",
            "uploader": ids["agardner"],
            "createdOnDate": 1530817028000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1530817493000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 541,
            "sizeDeletions": 0
          },
          {
            "number": 28,
            "revision": "1b9695dc80853e0a4c52a392bfa5d7fb7cab4249",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/28",
            "uploader": ids["agardner"],
            "createdOnDate": 1531180963000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1531181550000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1531181387000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "lftools/cli/__init__.py",
                "line": 22,
                "reviewer": ids["zxiiro"],
                "message": "I think the parseinfofile and correctinfofile should be merged into a single infofile command. Something like:\n\n lftools info correct|parse [args]",
                "patchSetTimestamp": 1531180963000
              },
              {
                "file": "lftools/cli/__init__.py",
                "line": 22,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1531180963000
              },
              {
                "file": "requirements.txt",
                "line": 5,
                "reviewer": ids["zxiiro"],
                "message": "What\u0027s this providing that we cannot achieve with the regular PyYAML import?",
                "patchSetTimestamp": 1531180963000
              },
              {
                "file": "requirements.txt",
                "line": 5,
                "reviewer": ids["agardner"],
                "message": "I am reading and then writing back to the YAML files",
                "patchSetTimestamp": 1531180963000
              }
            ],
            "sizeInsertions": 590,
            "sizeDeletions": 0
          },
          {
            "number": 29,
            "revision": "aa859be1eb04df4255376283eafd200949b85f11",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/29",
            "uploader": ids["agardner"],
            "createdOnDate": 1531243076000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1531243569000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 854,
            "sizeDeletions": 0
          },
          {
            "number": 30,
            "revision": "57d39cdf98ad2c3bad6821cdb018283d5511295d",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/30",
            "uploader": ids["agardner"],
            "createdOnDate": 1531248808000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1531249318000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 874,
            "sizeDeletions": 0
          },
          {
            "number": 31,
            "revision": "66b53262e3a4c3a41d5be15e7f48eb2824b93581",
            "parents": [
              "e3fd906d098ba9c75cd16dfdca895e58b37b65b7"
            ],
            "ref": "refs/changes/58/11558/31",
            "uploader": ids["agardner"],
            "createdOnDate": 1531515261000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1531515759000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 1159,
            "sizeDeletions": 0
          },
          {
            "number": 32,
            "revision": "1075f4602e033d321d68c6a7b970ec8ddf555029",
            "parents": [
              "e3fd906d098ba9c75cd16dfdca895e58b37b65b7"
            ],
            "ref": "refs/changes/58/11558/32",
            "uploader": ids["agardner"],
            "createdOnDate": 1531947666000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1531947918000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 1193,
            "sizeDeletions": 0
          },
          {
            "number": 33,
            "revision": "8502142c50972e360eeacb2b5052dd1a46b1a2b2",
            "parents": [
              "e3fd906d098ba9c75cd16dfdca895e58b37b65b7"
            ],
            "ref": "refs/changes/58/11558/33",
            "uploader": ids["agardner"],
            "createdOnDate": 1532028249000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1532028715000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 1227,
            "sizeDeletions": 0
          },
          {
            "number": 34,
            "revision": "54b7e2b803896741f6dca93754f147f97e40c1c4",
            "parents": [
              "e3fd906d098ba9c75cd16dfdca895e58b37b65b7"
            ],
            "ref": "refs/changes/58/11558/34",
            "uploader": ids["agardner"],
            "createdOnDate": 1532030753000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1532566037000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1532585847000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "shell/autocorrectinfofile",
                "line": 4,
                "reviewer": ids["zxiiro"],
                "message": "2018 right? or are this imported files?",
                "patchSetTimestamp": 1532030753000
              },
              {
                "file": "shell/inactivecommitters",
                "line": 4,
                "reviewer": ids["zxiiro"],
                "message": "2018 right? or are this imported files?",
                "patchSetTimestamp": 1532030753000
              },
              {
                "file": "shell/yaml4info",
                "line": 4,
                "reviewer": ids["zxiiro"],
                "message": "2018 right? or are this imported files?",
                "patchSetTimestamp": 1532030753000
              },
              {
                "file": "shell/yaml4info",
                "line": 4,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532030753000
              }
            ],
            "sizeInsertions": 676,
            "sizeDeletions": 0
          },
          {
            "number": 35,
            "revision": "fe33c666e9adb9b0c4625c7055a31f40c1ebc4e5",
            "parents": [
              "e3fd906d098ba9c75cd16dfdca895e58b37b65b7"
            ],
            "ref": "refs/changes/58/11558/35",
            "uploader": ids["agardner"],
            "createdOnDate": 1532635275000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1532709797000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1532707297000,
                "grantedBy": ids["agardner"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1532635783000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "lftools/cli/infofile.py",
                "line": 26,
                "reviewer": ids["zxiiro"],
                "message": "If there\u0027s no envvar just don\u0027t include the definition.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 26,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 27,
                "reviewer": ids["zxiiro"],
                "message": "This doesn\u0027t look optional. I would use click.argument in this case so that you call the command as: parse FILE --params",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 27,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 28,
                "reviewer": ids["zxiiro"],
                "message": "Should this actually be a \"bool\" then? seems like that\u0027s how it\u0027s used below.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 28,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 31,
                "reviewer": ids["zxiiro"],
                "message": "LFID",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 31,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 42,
                "reviewer": ids["zxiiro"],
                "message": "Unnecessary, if lookup is [] then the for loop below won\u0027t execute anyway.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 42,
                "reviewer": ids["agardner"],
                "message": "yeah this was for some error correction i mean to add, fixed in the latest patchset",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 54,
                "reviewer": ids["zxiiro"],
                "message": "I think the if logic up here doesn\u0027t make sense.\n\n1. Full seems to take precedence over everything. So if someone says --full --id abc123, then it will loop the lookup for all results not just for the one id.\n\nThese 2 switches should be mutually exclusive right?\n\nSo if someone passes an ID then it will only print the ID of that person, otherwise use the loop to iterate over all committers.\n\nRegardless of the above statement, if someone passes --full then print all of the info, otherwise only print the id field.\n\nTo me this sounds like we need 2 sets of if-statements.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 54,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 54,
                "reviewer": ids["zxiiro"],
                "message": "Not sure this is addressed. Let me do a fresh comment on the latest change though.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 60,
                "reviewer": ids["zxiiro"],
                "message": "If there is no envvar just don\u0027t declare it.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 60,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 65,
                "reviewer": ids["zxiiro"],
                "message": "For the above 3 settings none of them are optional so I think we should use click.arguments instead so that the command becomes:\n\n correct info_file ldap_file user_id [--repo NAME]",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 65,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 67,
                "reviewer": ids["zxiiro"],
                "message": "What is the context for the repo name? is it a repo in ldap or what?",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 67,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 67,
                "reviewer": ids["zxiiro"],
                "message": "I don\u0027t think this is addressed. I still don\u0027t understand the context of the repo name?",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 69,
                "reviewer": ids["zxiiro"],
                "message": "info_file",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 69,
                "reviewer": ids["zxiiro"],
                "message": "ldap_file",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 69,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 81,
                "reviewer": ids["zxiiro"],
                "message": "info_data\n\nwould be more clear.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 81,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 81,
                "reviewer": ids["zxiiro"],
                "message": "Wasn\u0027t addressed.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 82,
                "reviewer": ids["zxiiro"],
                "message": "ldap_data would be more clear.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 82,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 82,
                "reviewer": ids["zxiiro"],
                "message": "Wasn\u0027t addressed.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 82,
                "reviewer": ids["zxiiro"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 105,
                "reviewer": ids["zxiiro"],
                "message": "committer*",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 105,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 107,
                "reviewer": ids["zxiiro"],
                "message": "I\u0027m not entirely sure what this if-statement is doing. seems like there is no code at all after it so there\u0027s nothing to break from. Did you mean to put this above the data line previously? or should it just be removed entirely?",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 107,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 109,
                "reviewer": ids["zxiiro"],
                "message": "unnecessary else statement the continue is implied since there\u0027s nothing after.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 109,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 121,
                "reviewer": ids["zxiiro"],
                "message": "Use the with open() pattern instead of f.close()",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 121,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 121,
                "reviewer": ids["zxiiro"],
                "message": "This wasn\u0027t addressed.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 121,
                "reviewer": ids["zxiiro"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 34,
                "reviewer": ids["zxiiro"],
                "message": "should be click.argument if this is not optional.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 34,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 36,
                "reviewer": ids["zxiiro"],
                "message": "What is groups? is it 1 group? or if I can pass more than 1 what\u0027s the format?\n\nI think it\u0027s a better user experience if hte command is like this:\n\n yaml4info group [...]\n\nwhere you can keep passing space separated list of groups to parse (assuming this supports passing more than 1?)",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 36,
                "reviewer": ids["agardner"],
                "message": "not sure how to do this",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 43,
                "reviewer": ids["zxiiro"],
                "message": "Would be more clear as gerrit-url",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 43,
                "reviewer": ids["agardner"],
                "message": "it doesnt seem to like -\u0027s in the option name",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 43,
                "reviewer": ids["zxiiro"],
                "message": "huh... really? odd :/",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 43,
                "reviewer": ids["zxiiro"],
                "message": "This works: \u0027--gerrit-url\u0027\n\nWhen it turns into a variable it becomes gerrit_url which is probably why you were having issues. I\u0027ve updated this in the latest patch.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 46,
                "reviewer": ids["zxiiro"],
                "message": "if these options are not actually optional I think it would be better if the format of the command was:\n\n inactivecommitters URL GROUP",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 46,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 55,
                "reviewer": ids["zxiiro"],
                "message": "GERRIT_CLONE_BASE",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 55,
                "reviewer": ids["zxiiro"],
                "message": "--gerrit-clone-base",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 57,
                "reviewer": ids["zxiiro"],
                "message": "LDAP_GROUP",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 57,
                "reviewer": ids["zxiiro"],
                "message": "--ldap-group",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 64,
                "reviewer": ids["zxiiro"],
                "message": "We shouldn\u0027t use click.option() for required arguments that have no default value. Use click.argument instead.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 64,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 73,
                "reviewer": ids["zxiiro"],
                "message": "--ldap-server",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 75,
                "reviewer": ids["zxiiro"],
                "message": "--ldap-user-base",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 77,
                "reviewer": ids["zxiiro"],
                "message": "--ldap-group-base",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 79,
                "reviewer": ids["zxiiro"],
                "message": "We should use a click.argument() that accepts a space separated list of inputs like:\n\n csv GROUP [...]",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 79,
                "reviewer": ids["agardner"],
                "message": "not sure how to do this..",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/parseinfofile.py",
                "line": 0,
                "reviewer": ids["zxiiro"],
                "message": "I think we forgot to delete this file? It\u0027s in the infofile.py now right?",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/parseinfofile.py",
                "line": 0,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "setup.py",
                "line": 63,
                "reviewer": ids["zxiiro"],
                "message": "Alphabetical order please.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "shell/autocorrectinfofile",
                "line": 19,
                "reviewer": ids["zxiiro"],
                "message": "can we put it in /tmp/infofile/\u003cfiles\u003e instead. That way our /tmp directory does not get cluttered by a bunch of output from a single application.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "shell/autocorrectinfofile",
                "line": 19,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "shell/autocorrectinfofile",
                "line": 20,
                "reviewer": ids["zxiiro"],
                "message": "4 space indent these functions (below as well, and in the other shell files)..",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "shell/autocorrectinfofile",
                "line": 20,
                "reviewer": ids["agardner"],
                "message": "I would not normally do this, do we have a style guide I can follow?",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "shell/autocorrectinfofile",
                "line": 20,
                "reviewer": ids["zxiiro"],
                "message": "No, we should make one though. However in general most of our scripts use 4 space indents.\n\nRegardless of 4 or 2 space indents though we should indent functions for readability:\n\n func1() {\n     echo hello\n     echo world\n }",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "shell/yaml4info",
                "line": 47,
                "reviewer": ids["zxiiro"],
                "message": "move this down a line.",
                "patchSetTimestamp": 1532635275000
              }
            ],
            "sizeInsertions": 676,
            "sizeDeletions": 0
          },
          {
            "number": 36,
            "revision": "e38334b2dacc7da9289d2c6a766af700206fcf78",
            "parents": [
              "b383380735089719b120dd613eda4fcfa4ea55ff"
            ],
            "ref": "refs/changes/58/11558/36",
            "uploader": ids["agardner"],
            "createdOnDate": 1533664193000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1533664521000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 673,
            "sizeDeletions": -1
          },
          {
            "number": 37,
            "revision": "f64b28c446f86090457c15e40b6d5b6b142e3fe4",
            "parents": [
              "b383380735089719b120dd613eda4fcfa4ea55ff"
            ],
            "ref": "refs/changes/58/11558/37",
            "uploader": ids["agardner"],
            "createdOnDate": 1533752026000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1533752425000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 691,
            "sizeDeletions": -1
          },
          {
            "number": 38,
            "revision": "f2f2cf0c971d650ed6319e671de3ffab687b98bc",
            "parents": [
              "b383380735089719b120dd613eda4fcfa4ea55ff"
            ],
            "ref": "refs/changes/58/11558/38",
            "uploader": ids["agardner"],
            "createdOnDate": 1533752401000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 643,
            "sizeDeletions": -1
          },
          {
            "number": 39,
            "revision": "6955970637e509a9d53b6428c463c1fce2e01d3b",
            "parents": [
              "b383380735089719b120dd613eda4fcfa4ea55ff"
            ],
            "ref": "refs/changes/58/11558/39",
            "uploader": ids["agardner"],
            "createdOnDate": 1533752524000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1534597642000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1533752893000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 644,
            "sizeDeletions": -1
          },
          {
            "number": 40,
            "revision": "711d7b172fd724478ad5d3d2be362bdef5c8a925",
            "parents": [
              "027b69985bd4ca1a8cc711cc5215a7d67d99678c"
            ],
            "ref": "refs/changes/58/11558/40",
            "uploader": ids["agardner"],
            "createdOnDate": 1534789358000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1534789741000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "shell/autocorrectinfofile",
                "line": 18,
                "reviewer": ids["zxiiro"],
                "message": "I think the code would be a little more efficient if we swapped this around:\n\n DIR\u003d\"/tmp/...\"\n mkdir -p \"$DIR\"",
                "patchSetTimestamp": 1534789358000
              },
              {
                "file": "shell/autocorrectinfofile",
                "line": 18,
                "reviewer": ids["zxiiro"],
                "message": "Done",
                "patchSetTimestamp": 1534789358000
              }
            ],
            "sizeInsertions": 643,
            "sizeDeletions": 0
          },
          {
            "number": 41,
            "revision": "fdf3a3b8a61928af1968f3bf9714bc5a54d87fd8",
            "parents": [
              "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
            ],
            "ref": "refs/changes/58/11558/41",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1534810972000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1534811321000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 663,
            "sizeDeletions": 0
          },
          {
            "number": 42,
            "revision": "a105a193cef48e604e8ce5b3e7f0dbd84ba31e6d",
            "parents": [
              "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
            ],
            "ref": "refs/changes/58/11558/42",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1534811052000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1534811401000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 667,
            "sizeDeletions": 0
          },
          {
            "number": 43,
            "revision": "53f4104c41fae85bd558448a99570946b1d63990",
            "parents": [
              "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
            ],
            "ref": "refs/changes/58/11558/43",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1534811532000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1534812007000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 667,
            "sizeDeletions": 0
          },
          {
            "number": 44,
            "revision": "132c54d483d15c9fb9859b6eaeddefd227ecb046",
            "parents": [
              "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
            ],
            "ref": "refs/changes/58/11558/44",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1534812025000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1534814449000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1534812557000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "lftools/cli/infofile.py",
                "line": 32,
                "reviewer": ids["zxiiro"],
                "message": "Now that I understand this a bit more I think maybe calling this function \"get_committers\" is more accurate?",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 32,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 52,
                "reviewer": ids["zxiiro"],
                "message": "So the output we are providing it needs to be a properly formatted YAML?\n\nIn the case where only ID is printed it\u0027s not outputting a list item \"- id: uid\" instead it\u0027s just \"id: uid\" is this intended?",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 52,
                "reviewer": ids["agardner"],
                "message": "It\u0027s just output to be read by a human or parsed by a script (autocorrectinfofile) I don\u0027t see it living as valid yaml in a file.",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 54,
                "reviewer": ids["zxiiro"],
                "message": "Ok I think my original comment got misunderstood. Hopefully I\u0027ll be more clear this time. I didn\u0027t mean to add yet another if-statement to check that FULL and ID are passed.\n\nIf I understand the intent of this function correctly then it has 2 modes.\n\n1. --id is passed so return a single account\n2. --id is not passed so return all committers\n\nWithin 2) there is 2 states:\n\na. --full is passed so print name, email, and id\nb. --full is not passed so return only id\n\n\nI think this code would be a lot more cleaner. There\u0027s 2 parts to this:\n\nnew function declared above list_committers:\n\n    def print_committer_info(committer, full):\n        if full:\n            print(\"    - name: {}\".format(committer[\u0027name\u0027]))\n            print(\"      email: {}\".format(committer[\u0027email\u0027]))\n\n        print(\"      id: {}\".format(committer[\u0027id\u0027]))\n\nThis function handles printing both full and none full outputs.\n\nThe 2nd part the new loop:\n\n        for item in lookup:\n            if id:\n                if item[\u0027id\u0027] \u003d\u003d id:\n                    print_committer_info(item, True)\n                    break\n                else:\n                    continue\n\n            print_committer_info(item, full)\n\nThis loop is more clean and covers both cases of if we want to search for a single ID, vs print all of the IDs.",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 54,
                "reviewer": ids["agardner"],
                "message": "print_committer_info(item, full)\n\n-Also, done",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 66,
                "reviewer": ids["zxiiro"],
                "message": "This only deals with committers as far as I can tell. Maybe calling the function \"sync_committers\" would make more sense?",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 66,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 67,
                "reviewer": ids["zxiiro"],
                "message": "Sync\u0027s committer information from LDAP into INFO.yaml",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 67,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 79,
                "reviewer": ids["zxiiro"],
                "message": "Using \"with open\" syntax would be much better here.\n\n with open(info_file) as f:\n     info_data \u003d ryaml.load(f)\n with open(ldap_file) as f:\n     ldap_data \u003d ryaml.load(f)\n\nThis ensures that f.close() is appropriately called.",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 79,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 11,
                "reviewer": ids["zxiiro"],
                "message": "I think this pydoc is not accurate. It works on more than just OPNFV right?",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 14,
                "reviewer": ids["zxiiro"],
                "message": "Would be easier to read like this:\n\nPrereqs:\n\n - yum install python-devel openldap-devel\n - pip install python-ldap",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 37,
                "reviewer": ids["zxiiro"],
                "message": "committers",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "releasenotes/notes/ldap-info-017df79c3c8f9585.yaml",
                "line": 8,
                "reviewer": ids["askb"],
                "message": "This is not an .rst file. Do we need the `.. code block::` here?",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "releasenotes/notes/ldap-info-017df79c3c8f9585.yaml",
                "line": 8,
                "reviewer": ids["zxiiro"],
                "message": "This is an RST file for our purposes. Reno generates RSTs from YAML via the Sphinx plugin.",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "releasenotes/notes/ldap-info-017df79c3c8f9585.yaml",
                "line": 19,
                "reviewer": ids["askb"],
                "message": "this is not an .rst file. Do we need the `.. code block::` here?",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "releasenotes/notes/ldap-info-017df79c3c8f9585.yaml",
                "line": 19,
                "reviewer": ids["zxiiro"],
                "message": "This is an RST file for our purposes. Reno generates RSTs from YAML via the Sphinx plugin.",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "shell/inactivecommitters",
                "line": 23,
                "reviewer": ids["askb"],
                "message": "optionally fix, shorter version: `date +%F`",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "shell/inactivecommitters",
                "line": 23,
                "reviewer": ids["zxiiro"],
                "message": "Personally I like %Y-%m-%d because it\u0027s clear what it means at a glance. %F I\u0027d have to Google and find out.",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "shell/inactivecommitters",
                "line": 37,
                "reviewer": ids["askb"],
                "message": "optionally fix, shorter version: `date +%F`",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "shell/inactivecommitters",
                "line": 37,
                "reviewer": ids["zxiiro"],
                "message": "Personally I like %Y-%m-%d because it\u0027s clear what it means at a glance. %F I\u0027d have to Google and find out.",
                "patchSetTimestamp": 1534812025000
              }
            ],
            "sizeInsertions": 667,
            "sizeDeletions": 0
          },
          {
            "number": 45,
            "revision": "430f9b4fb43c99cc7dd984b6f7766e7c57f10c55",
            "parents": [
              "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
            ],
            "ref": "refs/changes/58/11558/45",
            "uploader": ids["agardner"],
            "createdOnDate": 1534877202000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1534877663000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 670,
            "sizeDeletions": 0
          },
          {
            "number": 46,
            "revision": "4d7ce295121e166f2fb18417acd8f5193d4b382c",
            "parents": [
              "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
            ],
            "ref": "refs/changes/58/11558/46",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1534887115000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1534888446000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1535120394000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1535120808000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1534967664000,
                "grantedBy": ids["agardner"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1534887525000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 670,
            "sizeDeletions": 0
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 28,
          "reviewer": ids["zxiiro"],
          "message": "indent by 4 otherwise it\u0027s not affecting the def above. Python cares very much about indents :(",
          "patchSetTimestamp": 1530128919000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 141,
          "reviewer": ids["zxiiro"],
          "message": "These need to be spaces not tabs.",
          "patchSetTimestamp": 1530128919000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 149,
          "reviewer": ids["zxiiro"],
          "message": "Remove this.",
          "patchSetTimestamp": 1530128919000
        },
        {
          "file": "lftools/cli/__init__.py",
          "line": 22,
          "reviewer": ids["zxiiro"],
          "message": "I think the parseinfofile and correctinfofile should be merged into a single infofile command. Something like:\n\n lftools info correct|parse [args]",
          "patchSetTimestamp": 1531180963000
        },
        {
          "file": "requirements.txt",
          "line": 5,
          "reviewer": ids["zxiiro"],
          "message": "What\u0027s this providing that we cannot achieve with the regular PyYAML import?",
          "patchSetTimestamp": 1531180963000
        },
        {
          "file": "shell/autocorrectinfofile",
          "line": 4,
          "reviewer": ids["zxiiro"],
          "message": "2018 right? or are this imported files?",
          "patchSetTimestamp": 1532030753000
        },
        {
          "file": "shell/inactivecommitters",
          "line": 4,
          "reviewer": ids["zxiiro"],
          "message": "2018 right? or are this imported files?",
          "patchSetTimestamp": 1532030753000
        },
        {
          "file": "shell/yaml4info",
          "line": 4,
          "reviewer": ids["zxiiro"],
          "message": "2018 right? or are this imported files?",
          "patchSetTimestamp": 1532030753000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 26,
          "reviewer": ids["zxiiro"],
          "message": "If there\u0027s no envvar just don\u0027t include the definition.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 27,
          "reviewer": ids["zxiiro"],
          "message": "This doesn\u0027t look optional. I would use click.argument in this case so that you call the command as: parse FILE --params",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 28,
          "reviewer": ids["zxiiro"],
          "message": "Should this actually be a \"bool\" then? seems like that\u0027s how it\u0027s used below.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 31,
          "reviewer": ids["zxiiro"],
          "message": "LFID",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 42,
          "reviewer": ids["zxiiro"],
          "message": "Unnecessary, if lookup is [] then the for loop below won\u0027t execute anyway.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 54,
          "reviewer": ids["zxiiro"],
          "message": "I think the if logic up here doesn\u0027t make sense.\n\n1. Full seems to take precedence over everything. So if someone says --full --id abc123, then it will loop the lookup for all results not just for the one id.\n\nThese 2 switches should be mutually exclusive right?\n\nSo if someone passes an ID then it will only print the ID of that person, otherwise use the loop to iterate over all committers.\n\nRegardless of the above statement, if someone passes --full then print all of the info, otherwise only print the id field.\n\nTo me this sounds like we need 2 sets of if-statements.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 54,
          "reviewer": ids["zxiiro"],
          "message": "Not sure this is addressed. Let me do a fresh comment on the latest change though.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 60,
          "reviewer": ids["zxiiro"],
          "message": "If there is no envvar just don\u0027t declare it.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 65,
          "reviewer": ids["zxiiro"],
          "message": "For the above 3 settings none of them are optional so I think we should use click.arguments instead so that the command becomes:\n\n correct info_file ldap_file user_id [--repo NAME]",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 67,
          "reviewer": ids["zxiiro"],
          "message": "What is the context for the repo name? is it a repo in ldap or what?",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 67,
          "reviewer": ids["zxiiro"],
          "message": "I don\u0027t think this is addressed. I still don\u0027t understand the context of the repo name?",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 69,
          "reviewer": ids["zxiiro"],
          "message": "info_file",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 69,
          "reviewer": ids["zxiiro"],
          "message": "ldap_file",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 81,
          "reviewer": ids["zxiiro"],
          "message": "info_data\n\nwould be more clear.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 81,
          "reviewer": ids["zxiiro"],
          "message": "Wasn\u0027t addressed.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 82,
          "reviewer": ids["zxiiro"],
          "message": "ldap_data would be more clear.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 82,
          "reviewer": ids["zxiiro"],
          "message": "Wasn\u0027t addressed.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 82,
          "reviewer": ids["zxiiro"],
          "message": "Done",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 105,
          "reviewer": ids["zxiiro"],
          "message": "committer*",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 107,
          "reviewer": ids["zxiiro"],
          "message": "I\u0027m not entirely sure what this if-statement is doing. seems like there is no code at all after it so there\u0027s nothing to break from. Did you mean to put this above the data line previously? or should it just be removed entirely?",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 109,
          "reviewer": ids["zxiiro"],
          "message": "unnecessary else statement the continue is implied since there\u0027s nothing after.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 121,
          "reviewer": ids["zxiiro"],
          "message": "Use the with open() pattern instead of f.close()",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 121,
          "reviewer": ids["zxiiro"],
          "message": "This wasn\u0027t addressed.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 121,
          "reviewer": ids["zxiiro"],
          "message": "Done",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 34,
          "reviewer": ids["zxiiro"],
          "message": "should be click.argument if this is not optional.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 36,
          "reviewer": ids["zxiiro"],
          "message": "What is groups? is it 1 group? or if I can pass more than 1 what\u0027s the format?\n\nI think it\u0027s a better user experience if hte command is like this:\n\n yaml4info group [...]\n\nwhere you can keep passing space separated list of groups to parse (assuming this supports passing more than 1?)",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 43,
          "reviewer": ids["zxiiro"],
          "message": "Would be more clear as gerrit-url",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 43,
          "reviewer": ids["zxiiro"],
          "message": "huh... really? odd :/",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 43,
          "reviewer": ids["zxiiro"],
          "message": "This works: \u0027--gerrit-url\u0027\n\nWhen it turns into a variable it becomes gerrit_url which is probably why you were having issues. I\u0027ve updated this in the latest patch.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 46,
          "reviewer": ids["zxiiro"],
          "message": "if these options are not actually optional I think it would be better if the format of the command was:\n\n inactivecommitters URL GROUP",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 55,
          "reviewer": ids["zxiiro"],
          "message": "GERRIT_CLONE_BASE",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 55,
          "reviewer": ids["zxiiro"],
          "message": "--gerrit-clone-base",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 57,
          "reviewer": ids["zxiiro"],
          "message": "LDAP_GROUP",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 57,
          "reviewer": ids["zxiiro"],
          "message": "--ldap-group",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 64,
          "reviewer": ids["zxiiro"],
          "message": "We shouldn\u0027t use click.option() for required arguments that have no default value. Use click.argument instead.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 73,
          "reviewer": ids["zxiiro"],
          "message": "--ldap-server",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 75,
          "reviewer": ids["zxiiro"],
          "message": "--ldap-user-base",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 77,
          "reviewer": ids["zxiiro"],
          "message": "--ldap-group-base",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 79,
          "reviewer": ids["zxiiro"],
          "message": "We should use a click.argument() that accepts a space separated list of inputs like:\n\n csv GROUP [...]",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/parseinfofile.py",
          "line": 0,
          "reviewer": ids["zxiiro"],
          "message": "I think we forgot to delete this file? It\u0027s in the infofile.py now right?",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "setup.py",
          "line": 63,
          "reviewer": ids["zxiiro"],
          "message": "Alphabetical order please.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "shell/autocorrectinfofile",
          "line": 19,
          "reviewer": ids["zxiiro"],
          "message": "can we put it in /tmp/infofile/\u003cfiles\u003e instead. That way our /tmp directory does not get cluttered by a bunch of output from a single application.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "shell/autocorrectinfofile",
          "line": 20,
          "reviewer": ids["zxiiro"],
          "message": "4 space indent these functions (below as well, and in the other shell files)..",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "shell/autocorrectinfofile",
          "line": 20,
          "reviewer": ids["zxiiro"],
          "message": "No, we should make one though. However in general most of our scripts use 4 space indents.\n\nRegardless of 4 or 2 space indents though we should indent functions for readability:\n\n func1() {\n     echo hello\n     echo world\n }",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "shell/yaml4info",
          "line": 47,
          "reviewer": ids["zxiiro"],
          "message": "move this down a line.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "shell/autocorrectinfofile",
          "line": 18,
          "reviewer": ids["zxiiro"],
          "message": "I think the code would be a little more efficient if we swapped this around:\n\n DIR\u003d\"/tmp/...\"\n mkdir -p \"$DIR\"",
          "patchSetTimestamp": 1534789358000
        },
        {
          "file": "shell/autocorrectinfofile",
          "line": 18,
          "reviewer": ids["zxiiro"],
          "message": "Done",
          "patchSetTimestamp": 1534789358000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 32,
          "reviewer": ids["zxiiro"],
          "message": "Now that I understand this a bit more I think maybe calling this function \"get_committers\" is more accurate?",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 52,
          "reviewer": ids["zxiiro"],
          "message": "So the output we are providing it needs to be a properly formatted YAML?\n\nIn the case where only ID is printed it\u0027s not outputting a list item \"- id: uid\" instead it\u0027s just \"id: uid\" is this intended?",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 54,
          "reviewer": ids["zxiiro"],
          "message": "Ok I think my original comment got misunderstood. Hopefully I\u0027ll be more clear this time. I didn\u0027t mean to add yet another if-statement to check that FULL and ID are passed.\n\nIf I understand the intent of this function correctly then it has 2 modes.\n\n1. --id is passed so return a single account\n2. --id is not passed so return all committers\n\nWithin 2) there is 2 states:\n\na. --full is passed so print name, email, and id\nb. --full is not passed so return only id\n\n\nI think this code would be a lot more cleaner. There\u0027s 2 parts to this:\n\nnew function declared above list_committers:\n\n    def print_committer_info(committer, full):\n        if full:\n            print(\"    - name: {}\".format(committer[\u0027name\u0027]))\n            print(\"      email: {}\".format(committer[\u0027email\u0027]))\n\n        print(\"      id: {}\".format(committer[\u0027id\u0027]))\n\nThis function handles printing both full and none full outputs.\n\nThe 2nd part the new loop:\n\n        for item in lookup:\n            if id:\n                if item[\u0027id\u0027] \u003d\u003d id:\n                    print_committer_info(item, True)\n                    break\n                else:\n                    continue\n\n            print_committer_info(item, full)\n\nThis loop is more clean and covers both cases of if we want to search for a single ID, vs print all of the IDs.",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 66,
          "reviewer": ids["zxiiro"],
          "message": "This only deals with committers as far as I can tell. Maybe calling the function \"sync_committers\" would make more sense?",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 67,
          "reviewer": ids["zxiiro"],
          "message": "Sync\u0027s committer information from LDAP into INFO.yaml",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 79,
          "reviewer": ids["zxiiro"],
          "message": "Using \"with open\" syntax would be much better here.\n\n with open(info_file) as f:\n     info_data \u003d ryaml.load(f)\n with open(ldap_file) as f:\n     ldap_data \u003d ryaml.load(f)\n\nThis ensures that f.close() is appropriately called.",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 11,
          "reviewer": ids["zxiiro"],
          "message": "I think this pydoc is not accurate. It works on more than just OPNFV right?",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 14,
          "reviewer": ids["zxiiro"],
          "message": "Would be easier to read like this:\n\nPrereqs:\n\n - yum install python-devel openldap-devel\n - pip install python-ldap",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 37,
          "reviewer": ids["zxiiro"],
          "message": "committers",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "releasenotes/notes/ldap-info-017df79c3c8f9585.yaml",
          "line": 8,
          "reviewer": ids["zxiiro"],
          "message": "This is an RST file for our purposes. Reno generates RSTs from YAML via the Sphinx plugin.",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "releasenotes/notes/ldap-info-017df79c3c8f9585.yaml",
          "line": 19,
          "reviewer": ids["zxiiro"],
          "message": "This is an RST file for our purposes. Reno generates RSTs from YAML via the Sphinx plugin.",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "shell/inactivecommitters",
          "line": 23,
          "reviewer": ids["zxiiro"],
          "message": "Personally I like %Y-%m-%d because it\u0027s clear what it means at a glance. %F I\u0027d have to Google and find out.",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "shell/inactivecommitters",
          "line": 37,
          "reviewer": ids["zxiiro"],
          "message": "Personally I like %Y-%m-%d because it\u0027s clear what it means at a glance. %F I\u0027d have to Google and find out.",
          "patchSetTimestamp": 1534812025000
        }
      ]
    },
    {
      "commit": {
        "project": "releng/lftools",
        "branch": "master",
        "id": "Iff800472cecfe056285f07e1c2461775457cb0ab",
        "commitNumber": 12382,
        "subject": "Enable or disable Jenkins jobs matching regex",
        "owner": ids["askb"],
        "url": "https://gerrit.linuxfoundation.org/infra/12382",
        "commitMessage": "Enable or disable Jenkins jobs matching regex\n\nex:\nTo enable jobs\n\nTo disable jobs\n\nJIRA: RELENG-1117\nChange-Id: Iff800472cecfe056285f07e1c2461775457cb0ab\nSigned-off-by: Anil Belur \u003cabelur@linuxfoundation.org\u003e\n",
        "createdOnDate": 1535084726000,
        "lastUpdatedDate": 1535389389000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["lf-jenkins"],
          ids["zxiiro"],
          ids["askb"]
        ],
        "comments": [
          {
            "timestamp": 1535084726000,
            "reviewer": ids["askb"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1535084924000,
            "reviewer": ids["askb"],
            "message": "Uploaded patch set 2: Commit message was updated."
          },
          {
            "timestamp": 1535084976000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/257/"
          },
          {
            "timestamp": 1535085027000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/258/"
          },
          {
            "timestamp": 1535085217000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/257/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/257/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/257"
          },
          {
            "timestamp": 1535085240000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/258/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/258/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/258"
          },
          {
            "timestamp": 1535085876000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2: Code-Review-1\n\n(2 comments)\n\n`lftools jenkins enable-disable-jobs` is kind of clunky as a user experience.\n\nI think using \"jobs\" as a verb with commands under it makes more sense, kind of link how \"nodes\" has the subcommand list.\n\n lftools jenkins jobs enable REGEX\n lftools jenkins jobs disable REGEX\n\nThe groovy code can be stored as a global variable that\u0027s used by both functions so that there\u0027s no duplication."
          },
          {
            "timestamp": 1535086042000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2:\n\n(1 comment)"
          },
          {
            "timestamp": 1535091268000,
            "reviewer": ids["askb"],
            "message": "Uploaded patch set 3."
          },
          {
            "timestamp": 1535091485000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/260/"
          },
          {
            "timestamp": 1535091698000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/260/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/260/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/260"
          },
          {
            "timestamp": 1535091883000,
            "reviewer": ids["askb"],
            "message": "Uploaded patch set 4."
          },
          {
            "timestamp": 1535092049000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/261/"
          },
          {
            "timestamp": 1535092271000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/261/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/261"
          },
          {
            "timestamp": 1535092914000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 4: Code-Review-1\n\nI still think developing this as a \"jobs\" verb would be a lot better from a usability perspective. It also allows us to add additional \"job\" related commands in the future if we ever want to do more than just enable/disable jobs. Take a look at \"nodes.py\". I think there should be 2 clear commands under jobs like:\n\n\n lftools jenkins jobs enable REGEX\n lftools jenkins jobs disable REGEX\n\nThe groovy code can be stored as a global variable that\u0027s used by both functions so that there\u0027s no duplication of the groovy script."
          },
          {
            "timestamp": 1535094198000,
            "reviewer": ids["askb"],
            "message": "Patch Set 4:\n\n\u003e I still think developing this as a \"jobs\" verb would be a lot\n \u003e better from a usability perspective. It also allows us to add\n \u003e additional \"job\" related commands in the future if we ever want to\n \u003e do more than just enable/disable jobs. Take a look at \"nodes.py\". I\n \u003e think there should be 2 clear commands under jobs like:\n \u003e \n \u003e \n \u003e lftools jenkins jobs enable REGEX\n \u003e lftools jenkins jobs disable REGEX\n \u003e \n \u003e The groovy code can be stored as a global variable that\u0027s used by\n \u003e both functions so that there\u0027s no duplication of the groovy script.\n\nagreed, will update the change. Any pointers on adding the verb? Do we need to move this into a separate file?"
          },
          {
            "timestamp": 1535286673000,
            "reviewer": ids["askb"],
            "message": "Uploaded patch set 5."
          },
          {
            "timestamp": 1535287144000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/274/"
          },
          {
            "timestamp": 1535287387000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/274/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/274/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/274"
          },
          {
            "timestamp": 1535293757000,
            "reviewer": ids["askb"],
            "message": "Uploaded patch set 6."
          },
          {
            "timestamp": 1535293987000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/275/"
          },
          {
            "timestamp": 1535294210000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 6: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/275/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/275/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/275"
          },
          {
            "timestamp": 1535294413000,
            "reviewer": ids["askb"],
            "message": "Uploaded patch set 7."
          },
          {
            "timestamp": 1535294601000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/276/"
          },
          {
            "timestamp": 1535294854000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 7: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/276/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/276"
          },
          {
            "timestamp": 1535384849000,
            "reviewer": ids["askb"],
            "message": "Uploaded patch set 8."
          },
          {
            "timestamp": 1535385173000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/287/"
          },
          {
            "timestamp": 1535385480000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 8: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/287/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/287"
          },
          {
            "timestamp": 1535389387000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 8: Code-Review+2"
          },
          {
            "timestamp": 1535389389000,
            "reviewer": ids["zxiiro"],
            "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "dd1289a05817ecef235773483b8de20ea4e8d49c",
            "parents": [
              "b383380735089719b120dd613eda4fcfa4ea55ff"
            ],
            "ref": "refs/changes/82/12382/1",
            "uploader": ids["askb"],
            "createdOnDate": 1535084726000,
            "author": ids["askb"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1535085217000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 41,
            "sizeDeletions": 0
          },
          {
            "number": 2,
            "revision": "370753cfcf79784ba23bb5fc46509056b05c3006",
            "parents": [
              "b383380735089719b120dd613eda4fcfa4ea55ff"
            ],
            "ref": "refs/changes/82/12382/2",
            "uploader": ids["askb"],
            "createdOnDate": 1535084924000,
            "author": ids["askb"],
            "isDraft": false,
            "kind": "NO_CODE_CHANGE",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1535085876000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1535085240000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "lftools/cli/jenkins/__init__.py",
                "line": 170,
                "reviewer": ids["zxiiro"],
                "message": "Looks like this isn\u0027t even used at all in the code.",
                "patchSetTimestamp": 1535084924000
              },
              {
                "file": "lftools/cli/jenkins/__init__.py",
                "line": 194,
                "reviewer": ids["zxiiro"],
                "message": "We should probably give credit to the original author of this code and provide a reference to the stack overflow this comes from since it is not original work.",
                "patchSetTimestamp": 1535084924000
              },
              {
                "file": "lftools/cli/jenkins/__init__.py",
                "line": 194,
                "reviewer": ids["zxiiro"],
                "message": "Ah nevermind on this one I didn\u0027t realize it was modified since the one we used this morning.",
                "patchSetTimestamp": 1535084924000
              }
            ],
            "sizeInsertions": 41,
            "sizeDeletions": 0
          },
          {
            "number": 3,
            "revision": "7dce6a0a2229f2f361bcf081df42e82d185ef802",
            "parents": [
              "b383380735089719b120dd613eda4fcfa4ea55ff"
            ],
            "ref": "refs/changes/82/12382/3",
            "uploader": ids["askb"],
            "createdOnDate": 1535091268000,
            "author": ids["askb"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1535091698000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 41,
            "sizeDeletions": 0
          },
          {
            "number": 4,
            "revision": "bd408c112bd27078b75c248305917426310d4787",
            "parents": [
              "b383380735089719b120dd613eda4fcfa4ea55ff"
            ],
            "ref": "refs/changes/82/12382/4",
            "uploader": ids["askb"],
            "createdOnDate": 1535091883000,
            "author": ids["askb"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1535092914000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1535092271000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 42,
            "sizeDeletions": 0
          },
          {
            "number": 5,
            "revision": "41251843c6489eaa4612c146f640f71899823072",
            "parents": [
              "b383380735089719b120dd613eda4fcfa4ea55ff"
            ],
            "ref": "refs/changes/82/12382/5",
            "uploader": ids["askb"],
            "createdOnDate": 1535286673000,
            "author": ids["askb"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1535287387000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 70,
            "sizeDeletions": 0
          },
          {
            "number": 6,
            "revision": "e8ca5d9a9ce403b7726456d6d401b409559d96c1",
            "parents": [
              "b383380735089719b120dd613eda4fcfa4ea55ff"
            ],
            "ref": "refs/changes/82/12382/6",
            "uploader": ids["askb"],
            "createdOnDate": 1535293757000,
            "author": ids["askb"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1535294210000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 70,
            "sizeDeletions": 0
          },
          {
            "number": 7,
            "revision": "feb3352ca81fd19553f985ef81ac1a89b1b6a627",
            "parents": [
              "b383380735089719b120dd613eda4fcfa4ea55ff"
            ],
            "ref": "refs/changes/82/12382/7",
            "uploader": ids["askb"],
            "createdOnDate": 1535294413000,
            "author": ids["askb"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1535294854000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 70,
            "sizeDeletions": 0
          },
          {
            "number": 8,
            "revision": "7d2b155ff78d52a94ada949cf85ffd17512cbc45",
            "parents": [
              "b383380735089719b120dd613eda4fcfa4ea55ff"
            ],
            "ref": "refs/changes/82/12382/8",
            "uploader": ids["askb"],
            "createdOnDate": 1535384849000,
            "author": ids["askb"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1535389387000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1535389389000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1535385480000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 75,
            "sizeDeletions": 0
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "lftools/cli/jenkins/__init__.py",
          "line": 170,
          "reviewer": ids["zxiiro"],
          "message": "Looks like this isn\u0027t even used at all in the code.",
          "patchSetTimestamp": 1535084924000
        },
        {
          "file": "lftools/cli/jenkins/__init__.py",
          "line": 194,
          "reviewer": ids["zxiiro"],
          "message": "We should probably give credit to the original author of this code and provide a reference to the stack overflow this comes from since it is not original work.",
          "patchSetTimestamp": 1535084924000
        },
        {
          "file": "lftools/cli/jenkins/__init__.py",
          "line": 194,
          "reviewer": ids["zxiiro"],
          "message": "Ah nevermind on this one I didn\u0027t realize it was modified since the one we used this morning.",
          "patchSetTimestamp": 1535084924000
        }
      ]
    }
  ],
  "commentsReceived": [
    {
      "commit": {
        "project": "releng/lftools",
        "branch": "master",
        "id": "Ic7af1eb53e8e9079b845203f44914310616c4bab",
        "commitNumber": 12391,
        "subject": "Add support to jenkins cmd for jenkins_jobs.ini",
        "owner": ids["zxiiro"],
        "url": "https://gerrit.linuxfoundation.org/infra/12391",
        "commitMessage": "Add support to jenkins cmd for jenkins_jobs.ini\n\nAllow the jenkins command to use existing jenkins_jobs.ini for\nconfiguration. By default assume jenkins_jobs.ini\u0027s default\nconfiguration \u0027jenkins\u0027.\n\nThis change makes \u0027server\u0027, \u0027user\u0027, and \u0027password\u0027 parameters no\nlonger required as defaults replace the need for these options.\n\n\u0027server\u0027 now defaults to \u0027jenkins\u0027 if jenkins_jobs.ini exists,\notherwise defaults to \u0027http://localhost:8080\u0027 which is the default\nJenkins deploy port.\n\n\u0027user\u0027 now defaults to \u0027admin\u0027 which is the Jenkins default admin\nuser.\n\n\u0027password\u0027 has no default and must be set by the user as this\nis randomly generated by Jenkins at boot.\n\nChange-Id: Ic7af1eb53e8e9079b845203f44914310616c4bab\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
        "createdOnDate": 1535175140000,
        "lastUpdatedDate": 1535463621000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["lf-jenkins"],
          ids["zxiiro"],
          ids["bramwelt"],
          ids["askb"]
        ],
        "comments": [
          {
            "timestamp": 1535175140000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1535175322000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/270/"
          },
          {
            "timestamp": 1535175536000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/270/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/270/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/270"
          },
          {
            "timestamp": 1535175607000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1535175724000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/271/"
          },
          {
            "timestamp": 1535175966000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/271/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/271"
          },
          {
            "timestamp": 1535354869000,
            "reviewer": ids["askb"],
            "message": "Patch Set 2:\n\n(1 comment)"
          },
          {
            "timestamp": 1535378180000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2:\n\n(1 comment)"
          },
          {
            "timestamp": 1535406974000,
            "reviewer": ids["bramwelt"],
            "message": "Patch Set 2: Code-Review+2"
          },
          {
            "timestamp": 1535408623000,
            "reviewer": ids["zxiiro"],
            "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
          },
          {
            "timestamp": 1535463621000,
            "reviewer": ids["askb"],
            "message": "Patch Set 2: Code-Review+2"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "2fb09a53cf0fa3c84b7faf85a9616edca87696d7",
            "parents": [
              "3a409e15b5ad16715525fc86ad163f61b890645f"
            ],
            "ref": "refs/changes/91/12391/1",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1535175140000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1535175536000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 31,
            "sizeDeletions": -4
          },
          {
            "number": 2,
            "revision": "54c0bdb08963841eecd01cc816d485d15f1e9de1",
            "parents": [
              "37c20018f44522eb56a9d7d54ab9f4c35c6e19d8"
            ],
            "ref": "refs/changes/91/12391/2",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1535175607000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1535408623000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1535406974000,
                "grantedBy": ids["bramwelt"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1535463621000,
                "grantedBy": ids["askb"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1535175966000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "releasenotes/notes/jenkins-25629106553ebbd5.yaml",
                "line": 5,
                "reviewer": ids["askb"],
                "message": "how does this file get generated, Do we add this manually for every change submitted?",
                "patchSetTimestamp": 1535175607000
              },
              {
                "file": "releasenotes/notes/jenkins-25629106553ebbd5.yaml",
                "line": 5,
                "reviewer": ids["zxiiro"],
                "message": "We use reno for release notes in lftools now. These files are generated using the reno tool. pip install reno and then run `reno new \u003ckeyword\u003e`. Documentation for reno is available via the reno project: https://docs.openstack.org/reno/latest/user/usage.html",
                "patchSetTimestamp": 1535175607000
              }
            ],
            "sizeInsertions": 30,
            "sizeDeletions": -4
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "releasenotes/notes/jenkins-25629106553ebbd5.yaml",
          "line": 5,
          "reviewer": ids["askb"],
          "message": "how does this file get generated, Do we add this manually for every change submitted?",
          "patchSetTimestamp": 1535175607000
        }
      ]
    },
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "If0dda88ff24da7fd171484c37855f33b05f36553",
        "commitNumber": 12293,
        "subject": "Add job to verify upstream global-jjb patches",
        "owner": ids["zxiiro"],
        "url": "https://gerrit.linuxfoundation.org/infra/12293",
        "commitMessage": "Add job to verify upstream global-jjb patches\n\nAdd job that can be used by downstream projects to report upstream\nto global-jjb patches when a proposed patch breaks their project.\n\nThis job sets -1 CR only and does not block the upstream patch as\nthere are cases where we may want to break backwards compatibility\non purpose. This job\u0027s purpose is to give us a clear view when it\ndoes happen.\n\nChange-Id: If0dda88ff24da7fd171484c37855f33b05f36553\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
        "createdOnDate": 1534465557000,
        "lastUpdatedDate": 1534781948000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["zxiiro"],
          ids["lf-jenkins"],
          ids["odl-jobbuilder"],
          ids["agrimberg"]
        ],
        "comments": [
          {
            "timestamp": 1534465557000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1534553237000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1:\n\nrecheck"
          },
          {
            "timestamp": 1534553316000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/1/ (1/2)"
          },
          {
            "timestamp": 1534553325000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/699/ (2/2)"
          },
          {
            "timestamp": 1534553486000,
            "reviewer": ids["odl-jobbuilder"],
            "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/1/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/1/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/1\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/699/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/699/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/699"
          },
          {
            "timestamp": 1534553503000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1:\n\nrecheck"
          },
          {
            "timestamp": 1534553589000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/700/ (1/2)"
          },
          {
            "timestamp": 1534553591000,
            "reviewer": ids["odl-jobbuilder"],
            "message": "Patch Set 1: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/2/ (2/2)"
          },
          {
            "timestamp": 1534553740000,
            "reviewer": ids["odl-jobbuilder"],
            "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/2/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/2/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/2\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/700/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/700/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/700"
          },
          {
            "timestamp": 1534554081000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1:\n\nrecheck"
          },
          {
            "timestamp": 1534554110000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/701/ (1/2)"
          },
          {
            "timestamp": 1534554245000,
            "reviewer": ids["odl-jobbuilder"],
            "message": "Patch Set 1: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/3/ (2/2)"
          },
          {
            "timestamp": 1534554284000,
            "reviewer": ids["odl-jobbuilder"],
            "message": "Patch Set 1: Code-Review-1 Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/3/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/3/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/3\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/701/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/701/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/701"
          },
          {
            "timestamp": 1534554885000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1:\n\nrecheck"
          },
          {
            "timestamp": 1534554956000,
            "reviewer": ids["odl-jobbuilder"],
            "message": "Patch Set 1: -Code-Review -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/4/ (1/2)"
          },
          {
            "timestamp": 1534554965000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/702/ (2/2)"
          },
          {
            "timestamp": 1534555124000,
            "reviewer": ids["odl-jobbuilder"],
            "message": "Patch Set 1: Code-Review-1 Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/4/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/4/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/4\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/702/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/702/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/702"
          },
          {
            "timestamp": 1534555229000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1534555296000,
            "reviewer": ids["odl-jobbuilder"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/5/ (1/3)"
          },
          {
            "timestamp": 1534555305000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/298/ (2/3)"
          },
          {
            "timestamp": 1534555365000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/703/ (3/3)"
          },
          {
            "timestamp": 1534556283000,
            "reviewer": ids["odl-jobbuilder"],
            "message": "Patch Set 2:\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/5/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/5\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/298/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/298\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/703/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/703"
          },
          {
            "timestamp": 1534556537000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2:\n\nODL Jenkins needs permissions to vote I think."
          },
          {
            "timestamp": 1534556751000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 3."
          },
          {
            "timestamp": 1534556824000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/301/ (1/3)"
          },
          {
            "timestamp": 1534556880000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/706/ (2/3)"
          },
          {
            "timestamp": 1534556968000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/8/ (3/3)"
          },
          {
            "timestamp": 1534558179000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/301/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/301\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/706/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/706\n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/8/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/8"
          },
          {
            "timestamp": 1534558796000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 3:\n\nrecheck"
          },
          {
            "timestamp": 1534558935000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/304/ (1/2)"
          },
          {
            "timestamp": 1534558949000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/710/ (2/2)"
          },
          {
            "timestamp": 1534559090000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/304/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/304\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/710/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/710"
          },
          {
            "timestamp": 1534606008000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 3: Code-Review+1"
          },
          {
            "timestamp": 1534779247000,
            "reviewer": ids["agrimberg"],
            "message": "Patch Set 3:\n\n(1 comment)"
          },
          {
            "timestamp": 1534781737000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 3:\n\n(1 comment)"
          },
          {
            "timestamp": 1534781947000,
            "reviewer": ids["agrimberg"],
            "message": "Patch Set 3: Code-Review+2"
          },
          {
            "timestamp": 1534781948000,
            "reviewer": ids["agrimberg"],
            "message": "Change has been successfully merged by Andrew Grimberg"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "5a7ace954ffa0734c4ce060f535f355d16df9e45",
            "parents": [
              "75cd5909da184179c77a55d1909f7159d9eea34b"
            ],
            "ref": "refs/changes/93/12293/1",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1534465557000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1534555124000,
                "grantedBy": ids["odl-jobbuilder"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1534555124000,
                "grantedBy": ids["odl-jobbuilder"]
              }
            ],
            "comments": [],
            "sizeInsertions": 70,
            "sizeDeletions": 0
          },
          {
            "number": 2,
            "revision": "7b745a6b694b52eb54afc6730917a381b3bcdf8c",
            "parents": [
              "75cd5909da184179c77a55d1909f7159d9eea34b"
            ],
            "ref": "refs/changes/93/12293/2",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1534555229000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 107,
            "sizeDeletions": 0
          },
          {
            "number": 3,
            "revision": "e9a058af2478d5b0927429955022b1a56aef9fdd",
            "parents": [
              "75cd5909da184179c77a55d1909f7159d9eea34b"
            ],
            "ref": "refs/changes/93/12293/3",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1534556751000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1534781947000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1534781948000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1534606008000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1534559090000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "docs/jjb/lf-ci-jobs.rst",
                "line": 461,
                "reviewer": ids["agrimberg"],
                "message": "I\u0027m assuming that there is no github version of this because global-jjb is purely a Gerrit based project and all the downstreams will have to be watching the Gerrit stream on the LF Gerrit?",
                "patchSetTimestamp": 1534556751000
              },
              {
                "file": "docs/jjb/lf-ci-jobs.rst",
                "line": 461,
                "reviewer": ids["zxiiro"],
                "message": "Yeah I didn\u0027t want to force non-Gerrit projects to suddenly require Gerrit Trigger. If someone requests it we could add it in the future however I think we\u0027ll get good enough coverage by monitoring our Gerrit based projects at least.",
                "patchSetTimestamp": 1534556751000
              }
            ],
            "sizeInsertions": 107,
            "sizeDeletions": 0
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "docs/jjb/lf-ci-jobs.rst",
          "line": 461,
          "reviewer": ids["agrimberg"],
          "message": "I\u0027m assuming that there is no github version of this because global-jjb is purely a Gerrit based project and all the downstreams will have to be watching the Gerrit stream on the LF Gerrit?",
          "patchSetTimestamp": 1534556751000
        }
      ]
    },
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "I4ac1ce147ada7176cdac399b83edc646973dd80e",
        "commitNumber": 12504,
        "subject": "Use Reno for release notes",
        "owner": ids["zxiiro"],
        "url": "https://gerrit.linuxfoundation.org/infra/12504",
        "commitMessage": "Use Reno for release notes\n\nChange-Id: I4ac1ce147ada7176cdac399b83edc646973dd80e\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
        "createdOnDate": 1536361846000,
        "lastUpdatedDate": 1536366483000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["zxiiro"],
          ids["jwagantall"],
          ids["lf-jenkins"]
        ],
        "comments": [
          {
            "timestamp": 1536361846000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1536361912000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1: Code-Review+1"
          },
          {
            "timestamp": 1536361956000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/311/ (1/2)"
          },
          {
            "timestamp": 1536362006000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/743/ (2/2)"
          },
          {
            "timestamp": 1536362182000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/311/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/311\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/743/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/743"
          },
          {
            "timestamp": 1536363141000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 1:\n\n(1 comment)"
          },
          {
            "timestamp": 1536366227000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1:\n\n(1 comment)"
          },
          {
            "timestamp": 1536366481000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 1: Code-Review+2"
          },
          {
            "timestamp": 1536366483000,
            "reviewer": ids["jwagantall"],
            "message": "Change has been successfully merged by Jessica Wagantall"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "67aa548eb9d34b53810478b7c972cf005e72b431",
            "parents": [
              "baacf438b7128ac60b458398219467235fcef9b1"
            ],
            "ref": "refs/changes/04/12504/1",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1536361846000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1536361912000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1536366481000,
                "grantedBy": ids["jwagantall"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1536366483000,
                "grantedBy": ids["jwagantall"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1536362182000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "docs/release-notes.rst",
                "line": 1,
                "reviewer": ids["jwagantall"],
                "message": "Is this meant to be empty?\n\nOr are we just adding the space for now?",
                "patchSetTimestamp": 1536361846000
              },
              {
                "file": "docs/release-notes.rst",
                "line": 1,
                "reviewer": ids["zxiiro"],
                "message": "This is entirely auto-generated by reno when you run `tox -e docs`. \".. release-notes::\" is the directive that tells reno to take over and run. We don\u0027t need to do anything here other than define this one line :)",
                "patchSetTimestamp": 1536361846000
              }
            ],
            "sizeInsertions": 5,
            "sizeDeletions": -2
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "docs/release-notes.rst",
          "line": 1,
          "reviewer": ids["jwagantall"],
          "message": "Is this meant to be empty?\n\nOr are we just adding the space for now?",
          "patchSetTimestamp": 1536361846000
        }
      ]
    },
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "I0dd4342664251386ddc7eca52df56156105f200d",
        "commitNumber": 9927,
        "subject": "Rename maven-release job to maven-stage",
        "owner": ids["zxiiro"],
        "url": "https://gerrit.linuxfoundation.org/infra/9927",
        "commitMessage": "Rename maven-release job to maven-stage\n\nATTENTION: This is a breaking change. The trigger word\n\"build release$\" is changed to \"stage-release$\" to better\nreflect what this job is actually doing.\n\nIn preparation for work on RELENG-425 this change renames the\nmaven-release jobs to maven-stage job to better reflect what the\njob really does.\n\nTrigger keyword was also changed to \"stage-release$\"\n\nIssue: RELENG-425\nChange-Id: I0dd4342664251386ddc7eca52df56156105f200d\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
        "createdOnDate": 1523479918000,
        "lastUpdatedDate": 1533858637000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["zxiiro"],
          ids["askb"],
          ids["jwagantall"],
          ids["jeremyphelps"],
          ids["rovarga"],
          ids["agrimberg"],
          ids["lf-jenkins"]
        ],
        "comments": [
          {
            "timestamp": 1523479918000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1523479959000,
            "reviewer": ids["zxiiro"],
            "message": "Topic set to RELENG-425"
          },
          {
            "timestamp": 1523481016000,
            "reviewer": ids["jeremyphelps"],
            "message": "Patch Set 1: Code-Review+1"
          },
          {
            "timestamp": 1523857395000,
            "reviewer": ids["askb"],
            "message": "Patch Set 1: Code-Review+1"
          },
          {
            "timestamp": 1524189687000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 1: Code-Review-1\n\n(2 comments)"
          },
          {
            "timestamp": 1524189746000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 1:\n\nMy documentation comment is more optional if you guys agree.. but just the correction in lf-maven-jobs needs to be done."
          },
          {
            "timestamp": 1524239560000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1:\n\n(1 comment)"
          },
          {
            "timestamp": 1524243249000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 1:\n\n(1 comment)"
          },
          {
            "timestamp": 1524665329000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1:\n\n(2 comments)"
          },
          {
            "timestamp": 1524665342000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1525290278000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 2: Code-Review+2"
          },
          {
            "timestamp": 1533220941000,
            "reviewer": ids["jeremyphelps"],
            "message": "Patch Set 2:\n\n\u003e (2 comments)\n\nAre we still planning on this?  I think it\u0027s a good idea."
          },
          {
            "timestamp": 1533222674000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2:\n\nYep. I was holding this off for a valid release job but maybe we should just go ahead and release this. I\u0027ll rebase this and resubmit."
          },
          {
            "timestamp": 1533222763000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 3: Patch Set 2 was rebased."
          },
          {
            "timestamp": 1533222832000,
            "reviewer": ids["jeremyphelps"],
            "message": "Patch Set 3: Code-Review+1\n\nOthers to review since it is a breaking change."
          },
          {
            "timestamp": 1533222898000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/292/ (1/2)"
          },
          {
            "timestamp": 1533222953000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/686/ (2/2)"
          },
          {
            "timestamp": 1533223027000,
            "reviewer": ids["agrimberg"],
            "message": "Patch Set 3: Code-Review+1\n\nI\u0027m fine with this. The only reason we don\u0027t need to go bumping the major for global-jjb is due to us not having actually released a 1.x series yet!\n\nI\u0027m thinking we probably should do so in the not so distant future"
          },
          {
            "timestamp": 1533223120000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/292/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/292\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/686/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/686"
          },
          {
            "timestamp": 1533519608000,
            "reviewer": ids["askb"],
            "message": "Patch Set 3: Code-Review+1"
          },
          {
            "timestamp": 1533851915000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 3: Code-Review+2"
          },
          {
            "timestamp": 1533851933000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 3:\n\nI\u0027d like to land this for the next global-jjb release."
          },
          {
            "timestamp": 1533858619000,
            "reviewer": ids["jeremyphelps"],
            "message": "Patch Set 3: Code-Review+2\n\nJust need to be sure to include this is a breaking change."
          },
          {
            "timestamp": 1533858637000,
            "reviewer": ids["jeremyphelps"],
            "message": "Change has been successfully merged by Jeremy Phelps"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "a690e8897a20db81b31341e74b6ccea3e0be6a75",
            "parents": [
              "42bccf5db0da3fd0b900a3c508988d992b1fecc2"
            ],
            "ref": "refs/changes/27/9927/1",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1523479918000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1523857395000,
                "grantedBy": ids["askb"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1524189687000,
                "grantedBy": ids["jwagantall"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1523481016000,
                "grantedBy": ids["jeremyphelps"]
              }
            ],
            "comments": [
              {
                "file": "docs/jjb/lf-maven-jobs.rst",
                "line": 264,
                "reviewer": ids["jwagantall"],
                "message": "Can we add to this documentation that the repo created has the format \"autorelase-####\"? Just to be more specific.",
                "patchSetTimestamp": 1523479918000
              },
              {
                "file": "docs/jjb/lf-maven-jobs.rst",
                "line": 264,
                "reviewer": ids["zxiiro"],
                "message": "In odl every project has a different repo name.\n\nautorelease-#### is for the autorelease project.\nodlparent-#### is for the odlparent project.\nyangtools-#### is for the yangtools project.\n\netc...\n\nI can add details that it will be in the format [a-z]+-[0-9][0-9][0-9][0-9].",
                "patchSetTimestamp": 1523479918000
              },
              {
                "file": "docs/jjb/lf-maven-jobs.rst",
                "line": 264,
                "reviewer": ids["jwagantall"],
                "message": "Oh, I didn\u0027t realized that was the case for different projects. Yes please.. let\u0027s add the expected format",
                "patchSetTimestamp": 1523479918000
              },
              {
                "file": "docs/jjb/lf-maven-jobs.rst",
                "line": 264,
                "reviewer": ids["zxiiro"],
                "message": "Done",
                "patchSetTimestamp": 1523479918000
              },
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 682,
                "reviewer": ids["jwagantall"],
                "message": "lf_maven_stage",
                "patchSetTimestamp": 1523479918000
              },
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 682,
                "reviewer": ids["zxiiro"],
                "message": "Done",
                "patchSetTimestamp": 1523479918000
              }
            ],
            "sizeInsertions": 22,
            "sizeDeletions": -22
          },
          {
            "number": 2,
            "revision": "4e1a2815be2952983293f6867e5231eed91e463c",
            "parents": [
              "bfe91be03d516a56adb74abd1e16c50b86c27c6e"
            ],
            "ref": "refs/changes/27/9927/2",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1524665342000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1525290278000,
                "grantedBy": ids["jwagantall"]
              }
            ],
            "comments": [],
            "sizeInsertions": 28,
            "sizeDeletions": -25
          },
          {
            "number": 3,
            "revision": "32363c61de3ae1fa4bf31fe17327bc153da3e897",
            "parents": [
              "356637f0d3d4091aecde9889c1bc9ec758a33336"
            ],
            "ref": "refs/changes/27/9927/3",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1533222763000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "TRIVIAL_REBASE",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1533223027000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1533851915000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1533519608000,
                "grantedBy": ids["askb"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1533858619000,
                "grantedBy": ids["jeremyphelps"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1533858637000,
                "grantedBy": ids["jeremyphelps"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1533223120000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 28,
            "sizeDeletions": -25
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "docs/jjb/lf-maven-jobs.rst",
          "line": 264,
          "reviewer": ids["jwagantall"],
          "message": "Can we add to this documentation that the repo created has the format \"autorelase-####\"? Just to be more specific.",
          "patchSetTimestamp": 1523479918000
        },
        {
          "file": "docs/jjb/lf-maven-jobs.rst",
          "line": 264,
          "reviewer": ids["jwagantall"],
          "message": "Oh, I didn\u0027t realized that was the case for different projects. Yes please.. let\u0027s add the expected format",
          "patchSetTimestamp": 1523479918000
        },
        {
          "file": "jjb/lf-maven-jobs.yaml",
          "line": 682,
          "reviewer": ids["jwagantall"],
          "message": "lf_maven_stage",
          "patchSetTimestamp": 1523479918000
        }
      ]
    },
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "I9db6e8603a7d968aacf0eae17dea3554d6c97429",
        "commitNumber": 12377,
        "subject": "Add option to disable-job for all jobs",
        "owner": ids["zxiiro"],
        "url": "https://gerrit.linuxfoundation.org/infra/12377",
        "commitMessage": "Add option to disable-job for all jobs\n\nAdd option to all jobs to allow disabling the job. CLM will has this\nsetting set to \"true\" while we figure out the CLM issues however\nfor all other jobs \"false\" is default.\n\nChange-Id: I9db6e8603a7d968aacf0eae17dea3554d6c97429\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
        "createdOnDate": 1535064996000,
        "lastUpdatedDate": 1535125169000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["zxiiro"],
          ids["lf-jenkins"],
          ids["jwagantall"],
          ids["askb"]
        ],
        "comments": [
          {
            "timestamp": 1535064996000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1535065056000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1: Code-Review+1"
          },
          {
            "timestamp": 1535065067000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/730/"
          },
          {
            "timestamp": 1535065138000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 2: Commit message was updated."
          },
          {
            "timestamp": 1535065215000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/730/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/730"
          },
          {
            "timestamp": 1535065285000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/731/"
          },
          {
            "timestamp": 1535065493000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/731/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/731"
          },
          {
            "timestamp": 1535065668000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 2: Code-Review-1\n\n(1 comment)"
          },
          {
            "timestamp": 1535065701000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 3."
          },
          {
            "timestamp": 1535065712000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2:\n\n(1 comment)"
          },
          {
            "timestamp": 1535065757000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 3: Code-Review+2"
          },
          {
            "timestamp": 1535065874000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/732/"
          },
          {
            "timestamp": 1535066025000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/732/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/732"
          },
          {
            "timestamp": 1535120613000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 3: Code-Review+1"
          },
          {
            "timestamp": 1535120614000,
            "reviewer": ids["zxiiro"],
            "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
          },
          {
            "timestamp": 1535125169000,
            "reviewer": ids["askb"],
            "message": "Patch Set 3: Code-Review+2"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "392f7c67550ed542a6893f465167d75a9694ee50",
            "parents": [
              "3e79ea1c1f71e75dc4192d9fd15ef3424c473f77"
            ],
            "ref": "refs/changes/77/12377/1",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1535064996000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1535065056000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1535065215000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 57,
            "sizeDeletions": -4
          },
          {
            "number": 2,
            "revision": "9c2ed070d86745a7929ebc727b5286e74178f8a5",
            "parents": [
              "3e79ea1c1f71e75dc4192d9fd15ef3424c473f77"
            ],
            "ref": "refs/changes/77/12377/2",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1535065138000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "NO_CODE_CHANGE",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1535065668000,
                "grantedBy": ids["jwagantall"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1535065493000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "jjb/lf-python-jobs.yaml",
                "line": 95,
                "reviewer": ids["jwagantall"],
                "message": "This should be true since it is clm related",
                "patchSetTimestamp": 1535065138000
              },
              {
                "file": "jjb/lf-python-jobs.yaml",
                "line": 95,
                "reviewer": ids["zxiiro"],
                "message": "Done",
                "patchSetTimestamp": 1535065138000
              }
            ],
            "sizeInsertions": 57,
            "sizeDeletions": -4
          },
          {
            "number": 3,
            "revision": "9cb04c8a479acc4e67891bdf425c62afae7445fa",
            "parents": [
              "3e79ea1c1f71e75dc4192d9fd15ef3424c473f77"
            ],
            "ref": "refs/changes/77/12377/3",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1535065701000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1535120613000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1535120614000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1535125169000,
                "grantedBy": ids["askb"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1535065757000,
                "grantedBy": ids["jwagantall"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1535066025000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 57,
            "sizeDeletions": -4
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "jjb/lf-python-jobs.yaml",
          "line": 95,
          "reviewer": ids["jwagantall"],
          "message": "This should be true since it is clm related",
          "patchSetTimestamp": 1535065138000
        }
      ]
    },
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "Ib706663f0c08bd7a9160b0a6ce69dcd3b802f8f5",
        "commitNumber": 12089,
        "subject": "Move openstack-cron job to global-jjb",
        "owner": ids["zxiiro"],
        "url": "https://gerrit.linuxfoundation.org/infra/12089",
        "commitMessage": "Move openstack-cron job to global-jjb\n\nMove OpenDaylight\u0027s builder-openstack-cron job to global-jjb. This is\nan initial patch that only migrates the \"image-protection\" script.\n\nimage-protection is used to parse jenkins-config/ and jjb/ directories\nfor any mention of images starting with \"ZZCI\" and flagging them as\nprotected. The assumption here is that ZZCI images are CI managed\nand if they are referred to anywher by anything then they are\neffectively considered in-use and should not be deletable so flag\nthem as \"protected: true\" in OpenStack.\n\nChange-Id: Ib706663f0c08bd7a9160b0a6ce69dcd3b802f8f5\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
        "createdOnDate": 1533248747000,
        "lastUpdatedDate": 1534912772000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["lf-jenkins"],
          ids["zxiiro"],
          ids["jeremyphelps"],
          ids["agrimberg"],
          ids["askb"]
        ],
        "comments": [
          {
            "timestamp": 1533248747000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1533855314000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1533856981000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 3."
          },
          {
            "timestamp": 1533857084000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 4."
          },
          {
            "timestamp": 1533857144000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 5."
          },
          {
            "timestamp": 1533857930000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 6."
          },
          {
            "timestamp": 1533858011000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/693/"
          },
          {
            "timestamp": 1533858163000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 6: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/693/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/693/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/693"
          },
          {
            "timestamp": 1533860928000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 7."
          },
          {
            "timestamp": 1533861004000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/695/"
          },
          {
            "timestamp": 1533861144000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 7: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/695/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/695/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/695"
          },
          {
            "timestamp": 1533861478000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 7: Code-Review-1\n\n(1 comment)"
          },
          {
            "timestamp": 1533863246000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 7:\n\n(1 comment)"
          },
          {
            "timestamp": 1534472279000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 8."
          },
          {
            "timestamp": 1534472396000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/295/ (1/2)"
          },
          {
            "timestamp": 1534472446000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/696/ (2/2)"
          },
          {
            "timestamp": 1534472579000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 8: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/696/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/696/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/696\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/295/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/295"
          },
          {
            "timestamp": 1534472648000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 8:\n\n(1 comment)\n\nrecheck"
          },
          {
            "timestamp": 1534472821000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 9."
          },
          {
            "timestamp": 1534472936000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/296/ (1/2)"
          },
          {
            "timestamp": 1534472986000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/697/ (2/2)"
          },
          {
            "timestamp": 1534473183000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 9: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/697/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/697/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/697\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/296/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/296"
          },
          {
            "timestamp": 1534518429000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 9:\n\nrecheck"
          },
          {
            "timestamp": 1534518558000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 9: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/297/ (1/2)"
          },
          {
            "timestamp": 1534518572000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/698/ (2/2)"
          },
          {
            "timestamp": 1534518714000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 9: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/297/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/297\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/698/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/698"
          },
          {
            "timestamp": 1534532779000,
            "reviewer": ids["jeremyphelps"],
            "message": "Patch Set 9:\n\n(1 comment)"
          },
          {
            "timestamp": 1534532994000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 9: Code-Review-1\n\n(1 comment)"
          },
          {
            "timestamp": 1534533108000,
            "reviewer": ids["jeremyphelps"],
            "message": "Patch Set 9:\n\n(1 comment)"
          },
          {
            "timestamp": 1534533197000,
            "reviewer": ids["jeremyphelps"],
            "message": "Patch Set 9:\n\n(1 comment)"
          },
          {
            "timestamp": 1534534599000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 9:\n\n(2 comments)"
          },
          {
            "timestamp": 1534557156000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 9:\n\n(3 comments)"
          },
          {
            "timestamp": 1534557169000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 10."
          },
          {
            "timestamp": 1534557243000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/302/ (1/3)"
          },
          {
            "timestamp": 1534557299000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/707/ (2/3)"
          },
          {
            "timestamp": 1534557417000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/9/ (3/3)"
          },
          {
            "timestamp": 1534557730000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 10: Code-Review+1"
          },
          {
            "timestamp": 1534558654000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 10:\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/302/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/302\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/707/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/707\n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/9/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/9"
          },
          {
            "timestamp": 1534558792000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 10:\n\nrecheck"
          },
          {
            "timestamp": 1534558855000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/303/ (1/2)"
          },
          {
            "timestamp": 1534558905000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/709/ (2/2)"
          },
          {
            "timestamp": 1534559053000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 10: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/303/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/303\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/709/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/709"
          },
          {
            "timestamp": 1534784723000,
            "reviewer": ids["agrimberg"],
            "message": "Patch Set 10: Code-Review+2"
          },
          {
            "timestamp": 1534784724000,
            "reviewer": ids["agrimberg"],
            "message": "Change has been successfully merged by Andrew Grimberg"
          },
          {
            "timestamp": 1534912772000,
            "reviewer": ids["askb"],
            "message": "Patch Set 10: Code-Review+2"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "4ffceaf68e6a2734d26de463d4effd39dd59927b",
            "parents": [
              "356637f0d3d4091aecde9889c1bc9ec758a33336"
            ],
            "ref": "refs/changes/89/12089/1",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1533248747000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 145,
            "sizeDeletions": 0
          },
          {
            "number": 2,
            "revision": "827b04f997822dca99dd0872e57d4c0ce23644f7",
            "parents": [
              "3ae312fbcced7c547bbe98a5692a6d2dcfc17558"
            ],
            "ref": "refs/changes/89/12089/2",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1533855314000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 120,
            "sizeDeletions": 0
          },
          {
            "number": 3,
            "revision": "fb2809c45a676a4c27bba5c75125de7cfbb69dc3",
            "parents": [
              "3ae312fbcced7c547bbe98a5692a6d2dcfc17558"
            ],
            "ref": "refs/changes/89/12089/3",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1533856981000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 142,
            "sizeDeletions": 0
          },
          {
            "number": 4,
            "revision": "5ac03c9b791c9759f3d4e125f4eeda495ab5da18",
            "parents": [
              "3ae312fbcced7c547bbe98a5692a6d2dcfc17558"
            ],
            "ref": "refs/changes/89/12089/4",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1533857084000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 144,
            "sizeDeletions": 0
          },
          {
            "number": 5,
            "revision": "bc6cc7ef3fa73e39be4300ccb190797ba3dbbabd",
            "parents": [
              "3ae312fbcced7c547bbe98a5692a6d2dcfc17558"
            ],
            "ref": "refs/changes/89/12089/5",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1533857144000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 144,
            "sizeDeletions": 0
          },
          {
            "number": 6,
            "revision": "c9b375460e82fa2a6173f515bb00fb897cc86dd4",
            "parents": [
              "3ae312fbcced7c547bbe98a5692a6d2dcfc17558"
            ],
            "ref": "refs/changes/89/12089/6",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1533857930000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1533858163000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 169,
            "sizeDeletions": 0
          },
          {
            "number": 7,
            "revision": "0dd206d7a8c7d629b9c1a37721802c5d413e96b0",
            "parents": [
              "75cd5909da184179c77a55d1909f7159d9eea34b"
            ],
            "ref": "refs/changes/89/12089/7",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1533860928000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1533861478000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1533861144000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "shell/openstack-protect-in-use-images.sh",
                "line": 28,
                "reviewer": ids["zxiiro"],
                "message": "This overrides the previous image :(",
                "patchSetTimestamp": 1533860928000
              },
              {
                "file": "shell/openstack-protect-in-use-images.sh",
                "line": 32,
                "reviewer": ids["zxiiro"],
                "message": "I wonder if we can get the protected setting from calling \"openstack image list\" so that we only hit the api once and cache it.",
                "patchSetTimestamp": 1533860928000
              },
              {
                "file": "shell/openstack-protect-in-use-images.sh",
                "line": 32,
                "reviewer": ids["zxiiro"],
                "message": "Nope :(\n\n$ openstack --os-cloud opendaylight image list -c protected\nNo recognized column names in [\u0027protected\u0027]. Recognized columns are (\u0027ID\u0027, \u0027Name\u0027, \u0027Status\u0027).",
                "patchSetTimestamp": 1533860928000
              }
            ],
            "sizeInsertions": 165,
            "sizeDeletions": 0
          },
          {
            "number": 8,
            "revision": "df7d40a7c575335504c6dfbca3175a5f9cfbf11d",
            "parents": [
              "75cd5909da184179c77a55d1909f7159d9eea34b"
            ],
            "ref": "refs/changes/89/12089/8",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1534472279000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1534472579000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 203,
            "sizeDeletions": 0
          },
          {
            "number": 9,
            "revision": "a8bf421dfb474d51165feda1cabab2d184491bf6",
            "parents": [
              "75cd5909da184179c77a55d1909f7159d9eea34b"
            ],
            "ref": "refs/changes/89/12089/9",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1534472821000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1534532994000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1534518714000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 1074,
                "reviewer": ids["jeremyphelps"],
                "message": "This represents a breaking change as it will fail if the file doesn\u0027t exist.  Just calling out.",
                "patchSetTimestamp": 1534472821000
              },
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 1074,
                "reviewer": ids["zxiiro"],
                "message": "yep this file is required though to do anything with openstack. We should document it in ci-jobs.rst though",
                "patchSetTimestamp": 1534472821000
              },
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 1074,
                "reviewer": ids["zxiiro"],
                "message": "Done",
                "patchSetTimestamp": 1534472821000
              },
              {
                "file": "shell/openstack-protect-in-use-images.sh",
                "line": 27,
                "reviewer": ids["jeremyphelps"],
                "message": "This command doesn\u0027t seem to be valid, at least on my laptop \njphelps@workhorse ~/projects/edgex/ci-management                                                                                                                                                 \n\u003e $ grep -r \u0027ZZCI - \u0027 --include \\*.yaml | awk -F\": \" -e \u0027{print $3}\u0027 | sed \"s:\u0027::;s:\u0027$::;/^$/d\" | sort -u                                                               \nawk: not an option: -e",
                "patchSetTimestamp": 1534472821000
              },
              {
                "file": "shell/openstack-protect-in-use-images.sh",
                "line": 27,
                "reviewer": ids["jeremyphelps"],
                "message": "cfg_images array...the grep only looks in yaml.\nand below\nyaml_images only looks in .cfg files.",
                "patchSetTimestamp": 1534472821000
              },
              {
                "file": "shell/openstack-protect-in-use-images.sh",
                "line": 27,
                "reviewer": ids["zxiiro"],
                "message": "doh, i\u0027ll fix that...",
                "patchSetTimestamp": 1534472821000
              },
              {
                "file": "shell/openstack-protect-in-use-images.sh",
                "line": 27,
                "reviewer": ids["zxiiro"],
                "message": "It is valid at least on CentOS. Here\u0027s my test here:\n\nhttps://jenkins.opendaylight.org/sandbox/job/builder-openstack-cron/4/",
                "patchSetTimestamp": 1534472821000
              },
              {
                "file": "shell/openstack-protect-in-use-images.sh",
                "line": 27,
                "reviewer": ids["zxiiro"],
                "message": "Looks like not all versions of awk have -e. I\u0027ll try without -e and see if it still works.",
                "patchSetTimestamp": 1534472821000
              },
              {
                "file": "shell/openstack-protect-in-use-images.sh",
                "line": 27,
                "reviewer": ids["zxiiro"],
                "message": "Done",
                "patchSetTimestamp": 1534472821000
              }
            ],
            "sizeInsertions": 202,
            "sizeDeletions": 0
          },
          {
            "number": 10,
            "revision": "d7b9a7cbd308d3d7d0174b5556ef6a53c744cf26",
            "parents": [
              "75cd5909da184179c77a55d1909f7159d9eea34b"
            ],
            "ref": "refs/changes/89/12089/10",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1534557169000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1534784723000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1534784724000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1534557730000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1534912772000,
                "grantedBy": ids["askb"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1534559053000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 204,
            "sizeDeletions": 0
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "jjb/lf-ci-jobs.yaml",
          "line": 1074,
          "reviewer": ids["jeremyphelps"],
          "message": "This represents a breaking change as it will fail if the file doesn\u0027t exist.  Just calling out.",
          "patchSetTimestamp": 1534472821000
        },
        {
          "file": "shell/openstack-protect-in-use-images.sh",
          "line": 27,
          "reviewer": ids["jeremyphelps"],
          "message": "This command doesn\u0027t seem to be valid, at least on my laptop \njphelps@workhorse ~/projects/edgex/ci-management                                                                                                                                                 \n\u003e $ grep -r \u0027ZZCI - \u0027 --include \\*.yaml | awk -F\": \" -e \u0027{print $3}\u0027 | sed \"s:\u0027::;s:\u0027$::;/^$/d\" | sort -u                                                               \nawk: not an option: -e",
          "patchSetTimestamp": 1534472821000
        },
        {
          "file": "shell/openstack-protect-in-use-images.sh",
          "line": 27,
          "reviewer": ids["jeremyphelps"],
          "message": "cfg_images array...the grep only looks in yaml.\nand below\nyaml_images only looks in .cfg files.",
          "patchSetTimestamp": 1534472821000
        }
      ]
    },
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "I0628cb5c7185e2143e448ceb4fa4752384581a5e",
        "commitNumber": 12318,
        "subject": "Add option to stage to Maven Central",
        "owner": ids["zxiiro"],
        "url": "https://gerrit.linuxfoundation.org/infra/12318",
        "commitMessage": "Add option to stage to Maven Central\n\nProvide an option to also stage to OSSRH in preparation to release\nto Maven Central.\n\nIn addition to printing the staging repo-id also print the URL to\nthe staging repo for convenience in stage-repo.txt.\n\nNOTE: This patch introduces a breaking change to\n      lf-infra-maven-parameters to introduce a new boolean parameter\n      mvn-central. Job templates using this macro will need to add\n      \u0027mvn-central: false\u0027 to their list of passed parameters.\n\nIssue: https://jira.opendaylight.org/browse/RELENG-28\nChange-Id: I0628cb5c7185e2143e448ceb4fa4752384581a5e\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
        "createdOnDate": 1534611026000,
        "lastUpdatedDate": 1534872533000,
        "isOpen": true,
        "status": "NEW",
        "reviewers": [
          ids["lf-jenkins"],
          ids["rovarga"],
          ids["vorburger"],
          ids["zxiiro"],
          ids["agrimberg"]
        ],
        "comments": [
          {
            "timestamp": 1534611026000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1534611095000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/716/"
          },
          {
            "timestamp": 1534611230000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/716/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/716/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/716"
          },
          {
            "timestamp": 1534611403000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1534611505000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/717/"
          },
          {
            "timestamp": 1534611661000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/717/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/717"
          },
          {
            "timestamp": 1534611835000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 3."
          },
          {
            "timestamp": 1534612068000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/718/"
          },
          {
            "timestamp": 1534612216000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/718/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/718"
          },
          {
            "timestamp": 1534613078000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 4: Commit message was updated."
          },
          {
            "timestamp": 1534613134000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 4: Code-Review-1\n\n(2 comments)"
          },
          {
            "timestamp": 1534613157000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/719/"
          },
          {
            "timestamp": 1534613322000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/719/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/719"
          },
          {
            "timestamp": 1534614761000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 5."
          },
          {
            "timestamp": 1534614857000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 5: Code-Review-2\n\nMy comments above should be addressed but additionally it looks like OSSRH will fail your staging repo if you are missing:\n\n1. source.jars\n2. javadoc.jars\n3. gpg signatures\n\nItem\u0027s 1 \u0026 2 are good for. Item 3 we need to get Sigul in place to automate this process."
          },
          {
            "timestamp": 1534614965000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/720/"
          },
          {
            "timestamp": 1534615136000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/720/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/720"
          },
          {
            "timestamp": 1534620082000,
            "reviewer": ids["agrimberg"],
            "message": "Patch Set 5: Code-Review-1\n\n(2 comments)"
          },
          {
            "timestamp": 1534872533000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 5:\n\n(1 comment)"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "1d428aba011436628e4542b483a6f97250f23cb1",
            "parents": [
              "75cd5909da184179c77a55d1909f7159d9eea34b"
            ],
            "ref": "refs/changes/18/12318/1",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1534611026000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1534611230000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 21,
            "sizeDeletions": -6
          },
          {
            "number": 2,
            "revision": "58f08491b03a624c9be6a84096c5b23f4d17409d",
            "parents": [
              "75cd5909da184179c77a55d1909f7159d9eea34b"
            ],
            "ref": "refs/changes/18/12318/2",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1534611403000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1534611661000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 23,
            "sizeDeletions": -6
          },
          {
            "number": 3,
            "revision": "03b3e986b9b8bb0636d747f3bb2fc538f48e3a97",
            "parents": [
              "75cd5909da184179c77a55d1909f7159d9eea34b"
            ],
            "ref": "refs/changes/18/12318/3",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1534611835000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1534612216000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 30,
            "sizeDeletions": -7
          },
          {
            "number": 4,
            "revision": "8ba8da20fa5e7714cebded68f2082038b478a6ae",
            "parents": [
              "75cd5909da184179c77a55d1909f7159d9eea34b"
            ],
            "ref": "refs/changes/18/12318/4",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1534613078000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "NO_CODE_CHANGE",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1534613134000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1534613322000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "/COMMIT_MSG",
                "line": 18,
                "reviewer": ids["zxiiro"],
                "message": "Maybe instead of forcing this on everyone. We should make it apply only to the staging job.",
                "patchSetTimestamp": 1534613078000
              },
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 134,
                "reviewer": ids["zxiiro"],
                "message": "need to make sure we document this in the RST files.",
                "patchSetTimestamp": 1534613078000
              }
            ],
            "sizeInsertions": 30,
            "sizeDeletions": -7
          },
          {
            "number": 5,
            "revision": "408fc151bf74ae36e1610e3b7c20ad33898f49cb",
            "parents": [
              "75cd5909da184179c77a55d1909f7159d9eea34b"
            ],
            "ref": "refs/changes/18/12318/5",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1534614761000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1534620082000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -2,
                "grantedOnDate": 1534614857000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1534615136000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "shell/maven-stage.sh",
                "line": 37,
                "reviewer": ids["agrimberg"],
                "message": "This is hard coding a Maven Central Nexus staging ID. I would expect that we should be ending up with a different ID per project that we setup for Maven Central push",
                "patchSetTimestamp": 1534614761000
              },
              {
                "file": "shell/maven-stage.sh",
                "line": 37,
                "reviewer": ids["zxiiro"],
                "message": "Yep this is the generic Profile ID that every OSSRH account get\u0027s access to. I was waiting for confirmation from the admins to see if we get our own special Profile ID or not.\n\nThe answer is yes we do so we\u0027ll need to make this configurable.",
                "patchSetTimestamp": 1534614761000
              },
              {
                "file": "shell/maven-stage.sh",
                "line": 41,
                "reviewer": ids["agrimberg"],
                "message": "This is the same as lines 25 - 32 just with some different parameters. as such, I think that lines 25 - 32 should be functionalized and then called with the needed parameters.",
                "patchSetTimestamp": 1534614761000
              }
            ],
            "sizeInsertions": 36,
            "sizeDeletions": -8
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "shell/maven-stage.sh",
          "line": 37,
          "reviewer": ids["agrimberg"],
          "message": "This is hard coding a Maven Central Nexus staging ID. I would expect that we should be ending up with a different ID per project that we setup for Maven Central push",
          "patchSetTimestamp": 1534614761000
        },
        {
          "file": "shell/maven-stage.sh",
          "line": 41,
          "reviewer": ids["agrimberg"],
          "message": "This is the same as lines 25 - 32 just with some different parameters. as such, I think that lines 25 - 32 should be functionalized and then called with the needed parameters.",
          "patchSetTimestamp": 1534614761000
        }
      ]
    },
    {
      "commit": {
        "project": "releng/lftools",
        "branch": "master",
        "id": "I58dc200f7b29429ee1215bacdc533d234ad153fb",
        "commitNumber": 12483,
        "subject": "Add cmd to share openstack images",
        "owner": ids["zxiiro"],
        "url": "https://gerrit.linuxfoundation.org/infra/12483",
        "commitMessage": "Add cmd to share openstack images\n\nAllows us to more easily share images to multiple openstack tenants.\n\nIssue: RELENG-1201\nChange-Id: I58dc200f7b29429ee1215bacdc533d234ad153fb\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
        "createdOnDate": 1536289612000,
        "lastUpdatedDate": 1536358056000,
        "isOpen": true,
        "status": "NEW",
        "reviewers": [
          ids["zxiiro"],
          ids["lf-jenkins"],
          ids["jwagantall"]
        ],
        "comments": [
          {
            "timestamp": 1536289612000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1536289708000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1536289747000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 3: Commit message was updated."
          },
          {
            "timestamp": 1536335586000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 3: Code-Review-1\n\nDon\u0027t forget reno notes."
          },
          {
            "timestamp": 1536341796000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 4."
          },
          {
            "timestamp": 1536341979000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/294/"
          },
          {
            "timestamp": 1536342152000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/294/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/294"
          },
          {
            "timestamp": 1536348809000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 5: Patch Set 4 was rebased."
          },
          {
            "timestamp": 1536348885000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/298/"
          },
          {
            "timestamp": 1536349132000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/298/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/298"
          },
          {
            "timestamp": 1536349628000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 5:\n\nI want to test this.. let me do that and then I can post my review.."
          },
          {
            "timestamp": 1536351972000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 5:\n\n(1 comment)"
          },
          {
            "timestamp": 1536352342000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 5:\n\n(1 comment)"
          },
          {
            "timestamp": 1536358056000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 5:\n\n(1 comment)"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "4c8a4cd76b2fd88b72cf9749000511031bdd581b",
            "parents": [
              "f5988d8e61013b13643575782b8418f31df65a3c"
            ],
            "ref": "refs/changes/83/12483/1",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1536289612000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 86,
            "sizeDeletions": -1
          },
          {
            "number": 2,
            "revision": "1a935890675c3c7d2f06ef17fd1434f3eb53156a",
            "parents": [
              "f5988d8e61013b13643575782b8418f31df65a3c"
            ],
            "ref": "refs/changes/83/12483/2",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1536289708000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 86,
            "sizeDeletions": 0
          },
          {
            "number": 3,
            "revision": "a9bc42abee5750f4d5da89bc8cf5bf02fae2e196",
            "parents": [
              "f5988d8e61013b13643575782b8418f31df65a3c"
            ],
            "ref": "refs/changes/83/12483/3",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1536289747000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "NO_CODE_CHANGE",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1536335586000,
                "grantedBy": ids["zxiiro"]
              }
            ],
            "comments": [],
            "sizeInsertions": 86,
            "sizeDeletions": 0
          },
          {
            "number": 4,
            "revision": "3b44464f6fe101ef6f19c15911092ce0be32bef5",
            "parents": [
              "f5988d8e61013b13643575782b8418f31df65a3c"
            ],
            "ref": "refs/changes/83/12483/4",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1536341796000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1536342152000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 98,
            "sizeDeletions": 0
          },
          {
            "number": 5,
            "revision": "50ce256a1e792c82f409c7b66b7b8bad1a9b5a37",
            "parents": [
              "ea7f2b8aaab8224860e82504109d4357eba00ec2"
            ],
            "ref": "refs/changes/83/12483/5",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1536348809000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "TRIVIAL_REBASE",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1536349132000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "releasenotes/notes/share-openstack-images-4f1e3d18fdcb488b.yaml",
                "line": 8,
                "reviewer": ids["jwagantall"],
                "message": "This command needs to specify that \"os-cloud\" option is required. \nFor example:\nlftools openstack --os-cloud \u003ccloud\u003e image share ...",
                "patchSetTimestamp": 1536348809000
              },
              {
                "file": "releasenotes/notes/share-openstack-images-4f1e3d18fdcb488b.yaml",
                "line": 8,
                "reviewer": ids["jwagantall"],
                "message": "I think there is a conflict of usage messages, is it?\nFor example:\n\n(lftools-dev) jessicag@jessicag:~/linuxfoundation/lftools-dev/lftools$ lftools openstack image share --help\nUsage: lftools openstack [OPTIONS] COMMAND [ARGS]...\n\nError: Missing option \"--os-cloud\".",
                "patchSetTimestamp": 1536348809000
              },
              {
                "file": "releasenotes/notes/share-openstack-images-4f1e3d18fdcb488b.yaml",
                "line": 8,
                "reviewer": ids["zxiiro"],
                "message": "nope, that\u0027s not needed, the better way to do it actually is:\n\n export OS_CLOUD\u003dodl\n\nThen you never have to specify it again. This true for all \"openstack\" commands so I don\u0027t think it needs to be made explicit for every sub-command of \"openstack\".",
                "patchSetTimestamp": 1536348809000
              }
            ],
            "sizeInsertions": 98,
            "sizeDeletions": 0
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "releasenotes/notes/share-openstack-images-4f1e3d18fdcb488b.yaml",
          "line": 8,
          "reviewer": ids["jwagantall"],
          "message": "This command needs to specify that \"os-cloud\" option is required. \nFor example:\nlftools openstack --os-cloud \u003ccloud\u003e image share ...",
          "patchSetTimestamp": 1536348809000
        },
        {
          "file": "releasenotes/notes/share-openstack-images-4f1e3d18fdcb488b.yaml",
          "line": 8,
          "reviewer": ids["jwagantall"],
          "message": "I think there is a conflict of usage messages, is it?\nFor example:\n\n(lftools-dev) jessicag@jessicag:~/linuxfoundation/lftools-dev/lftools$ lftools openstack image share --help\nUsage: lftools openstack [OPTIONS] COMMAND [ARGS]...\n\nError: Missing option \"--os-cloud\".",
          "patchSetTimestamp": 1536348809000
        }
      ]
    }
  ],
  "reviewersForOwnCommits": [
    {
      "identity": ids["rovarga"],
      "approvalData": {
        "addedAsReviewerCount": 2,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    },
    {
      "identity": ids["dfarrell07"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    },
    {
      "identity": ids["jwagantall"],
      "approvalData": {
        "addedAsReviewerCount": 9,
        "approvalCount": 10,
        "commentCount": 7,
        "approvals": {
          "-1": 2,
          "2": 8
        }
      }
    },
    {
      "identity": ids["shague"],
      "approvalData": {
        "addedAsReviewerCount": 6,
        "approvalCount": 5,
        "commentCount": 0,
        "approvals": {
          "2": 5
        }
      }
    },
    {
      "identity": ids["askb"],
      "approvalData": {
        "addedAsReviewerCount": 6,
        "approvalCount": 7,
        "commentCount": 1,
        "approvals": {
          "1": 2,
          "2": 5
        }
      }
    },
    {
      "identity": ids["agrimberg"],
      "approvalData": {
        "addedAsReviewerCount": 23,
        "approvalCount": 21,
        "commentCount": 3,
        "approvals": {
          "-1": 1,
          "1": 1,
          "2": 19
        }
      }
    },
    {
      "identity": ids["vorburger"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    },
    {
      "identity": ids["odl-jobbuilder"],
      "approvalData": {
        "addedAsReviewerCount": 3,
        "approvalCount": 1,
        "commentCount": 0,
        "approvals": {
          "-1": 1
        }
      }
    },
    {
      "identity": ids["jeremyphelps"],
      "approvalData": {
        "addedAsReviewerCount": 11,
        "approvalCount": 11,
        "commentCount": 3,
        "approvals": {
          "1": 1,
          "2": 10
        }
      }
    },
    {
      "identity": ids["tijohnson"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    },
    {
      "identity": ids["bramwelt"],
      "approvalData": {
        "addedAsReviewerCount": 3,
        "approvalCount": 2,
        "commentCount": 0,
        "approvals": {
          "2": 2
        }
      }
    },
    {
      "identity": ids["jluhrsen"],
      "approvalData": {
        "addedAsReviewerCount": 3,
        "approvalCount": 1,
        "commentCount": 0,
        "approvals": {
          "2": 1
        }
      }
    },
    {
      "identity": ids["ecelgp"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    },
    {
      "identity": ids["lf-jenkins"],
      "approvalData": {
        "addedAsReviewerCount": 46,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    },
    {
      "identity": ids["agardner"],
      "approvalData": {
        "addedAsReviewerCount": 2,
        "approvalCount": 1,
        "commentCount": 0,
        "approvals": {
          "2": 1
        }
      }
    }
  ],
  "repositories": {
    "releng/lftools": {
      "name": "releng/lftools",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/lftools",
      "reviewRequestors": [
        {
          "identity": ids["askb"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 3,
            "approvals": {}
          }
        },
        {
          "identity": ids["agardner"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 68,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 22
    },
    "releng/global-jjb": {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [
        {
          "identity": ids["jeremyphelps"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 2,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 26
    }
  },
  "averageTimeInCodeReview": 543453637,
  "abandonedCommitCount": 1,
  "projects": [
    {
      "name": "releng/lftools",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/lftools",
      "reviewRequestors": [
        {
          "identity": ids["askb"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 3,
            "approvals": {}
          }
        },
        {
          "identity": ids["agardner"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 68,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 22
    },
    {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [
        {
          "identity": ids["jeremyphelps"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 2,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 26
    }
  ],
  "selfReviewedCommitCount": 0,
  "inReviewCommitCount": 4
};